import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import alumniData from "../data/alumni.json";
import "./student-dashboard.css";

const PAGE_SIZES = [8, 16, 32];

export default function StudentDashboard() {
  const [alumniList, setAlumniList] = useState([]);
  const [filters, setFilters] = useState({ year: "", company: "", course: "" });
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [selectedAlumnus, setSelectedAlumnus] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("favAlumni") || "[]"); } catch { return []; }
  });
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const searchRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const debounceTimer = useRef(null);

  useEffect(() => setAlumniList(alumniData || []), []);

  useEffect(() => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => setDebouncedSearch(search.trim().toLowerCase()), 300);
    return () => clearTimeout(debounceTimer.current);
  }, [search]);

  useEffect(() => {
    function onKey(e) {
      const tag = (document.activeElement && document.activeElement.tagName) || "";
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === "Escape") {
        setMobileNavOpen(false);
        setSelectedAlumnus(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => localStorage.setItem("favAlumni", JSON.stringify(favorites)), [favorites]);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }, []);

  const uniqueYears = useMemo(() => [...new Set(alumniList.map(a => a.year))].sort((a,b) => b-a), [alumniList]);
  const uniqueCompanies = useMemo(() => [...new Set(alumniList.map(a => a.company).filter(Boolean))].sort(), [alumniList]);
  const uniqueCourses = useMemo(() => [...new Set(alumniList.map(a => a.course).filter(Boolean))].sort(), [alumniList]);

  const filteredAndSorted = useMemo(() => {
    let arr = alumniList;
    if (filters.year) arr = arr.filter(a => a.year.toString() === filters.year);
    if (filters.company) arr = arr.filter(a => a.company === filters.company);
    if (filters.course) arr = arr.filter(a => a.course === filters.course);
    if (debouncedSearch) {
      const q = debouncedSearch;
      arr = arr.filter(a => (
        (a.name || "").toLowerCase().includes(q) ||
        (a.course || "").toLowerCase().includes(q) ||
        (a.company || "").toLowerCase().includes(q)
      ));
    }
    arr = [...arr];
    const [field, dir] = sortBy.split("-");
    arr.sort((x,y) => {
      let vx = field === "year" ? (x.year || 0) : ((x.name || "").toLowerCase());
      let vy = field === "year" ? (y.year || 0) : ((y.name || "").toLowerCase());
      if (vx < vy) return dir === "asc" ? -1 : 1;
      if (vx > vy) return dir === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [alumniList, filters, debouncedSearch, sortBy]);

  const total = filteredAndSorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  useEffect(() => { if (page > totalPages) setPage(1); }, [totalPages]);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredAndSorted.slice(start, start + pageSize);
  }, [filteredAndSorted, page, pageSize]);

  const openProfile = (id, e) => {
    lastFocusedRef.current = e?.currentTarget ?? null;
    setSelectedAlumnus(id);
  };
  const closeProfile = () => {
    setSelectedAlumnus(null);
    lastFocusedRef.current?.focus?.();
  };

  const exportCSV = useCallback(() => {
    const rows = [["Name","Course","Year","Company","College","LinkedIn","GitHub","Procedure","Preparation"]];
    filteredAndSorted.forEach(a => {
      rows.push([a.name || "", a.course || "", a.year || "", a.company || "", a.college || "", a.social || "", a.coding || "", a.procedure || "", a.preparation || ""]);
    });
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `alumni-export-${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }, [filteredAndSorted]);

  const activeFilterCount = useMemo(() => Object.values(filters).filter(Boolean).length + (debouncedSearch ? 1 : 0), [filters, debouncedSearch]);

  return (
    <div className="dashboard enhanced">
      {/* Top nav */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <Link to="/" className="brand-link">🎓 Student Portal</Link>
          </div>

          <button
            className="mobile-toggle"
            aria-controls="site-nav"
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen(s => !s)}
          >
            ☰
          </button>

          <nav id="site-nav" className={`nav ${mobileNavOpen ? "open" : ""}`}>
            <Link to="/student">Dashboard</Link>
            <Link to="/chatbot">AI Chatbot</Link>
            <Link to="/summary">AI Placement</Link>
            <Link to="/mentors">Alumni Match</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* Controls */}
        <section className="controls">
          <div className="left-controls">
            <div className="search-wrap">
              <label htmlFor="search" className="visually-hidden">Search alumni</label>
              <input
                id="search"
                ref={searchRef}
                className="search-input"
                type="search"
                placeholder="Search by name, course or company (press / to focus)"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              />
            </div>

            <div className="filter-chips" aria-hidden={activeFilterCount === 0}>
              {filters.year && <button className="chip" onClick={() => setFilters(s => ({...s, year: ""}))}>Batch: {filters.year} ✖</button>}
              {filters.company && <button className="chip" onClick={() => setFilters(s => ({...s, company: ""}))}>Company: {filters.company} ✖</button>}
              {filters.course && <button className="chip" onClick={() => setFilters(s => ({...s, course: ""}))}>Branch: {filters.course} ✖</button>}
              {debouncedSearch && <button className="chip" onClick={() => { setSearch(""); setDebouncedSearch(""); }}>Search: {debouncedSearch} ✖</button>}
            </div>
          </div>

          <div className="right-controls">
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
              <option value="name-asc">Name ↑</option>
              <option value="name-desc">Name ↓</option>
              <option value="year-desc">Batch (new → old)</option>
              <option value="year-asc">Batch (old → new)</option>
            </select>

            <select value={pageSize} onChange={(e)=>{ setPageSize(Number(e.target.value)); setPage(1); }}>
              {PAGE_SIZES.map(s => <option key={s} value={s}>{s} / page</option>)}
            </select>

            <button className="btn-outline" onClick={exportCSV}>Export CSV</button>
          </div>
        </section>

        {/* Filters row */}
        <section className="compact-filters">
          <select name="year" value={filters.year} onChange={(e)=>{ setFilters(s => ({...s, year: e.target.value})); setPage(1); }}>
            <option value="">All Batches</option>
            {uniqueYears.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <select name="company" value={filters.company} onChange={(e)=>{ setFilters(s => ({...s, company: e.target.value})); setPage(1); }}>
            <option value="">All Companies</option>
            {uniqueCompanies.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select name="course" value={filters.course} onChange={(e)=>{ setFilters(s => ({...s, course: e.target.value})); setPage(1); }}>
            <option value="">All Branches</option>
            {uniqueCourses.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </section>

        {/* Grid */}
        <section className="grid" aria-live="polite">
          {paginated.length === 0 ? (
            <div className="empty">No alumni found. Try clearing filters or search.</div>
          ) : (
            paginated.map(alumnus => (
              <article key={alumnus.id} className="card" tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openProfile(alumnus.id, e)}>
                <div className="avatar">
                  <img src={alumnus.photo || "https://via.placeholder.com/120"} alt={alumnus.name} loading="lazy" />
                  <button
                    className={`fav-btn ${favorites.includes(alumnus.id) ? "active" : ""}`}
                    onClick={() => toggleFavorite(alumnus.id)}
                    aria-pressed={favorites.includes(alumnus.id)}
                    title={favorites.includes(alumnus.id) ? "Remove favorite" : "Add to favorites"}
                  >★</button>
                </div>

                <div className="card-body">
                  <h3 className="name">{alumnus.name}</h3>
                  <p className="meta">{alumnus.course} • Batch of {alumnus.year}</p>
                  <p className="company">{alumnus.company || "—"}</p>

                  <div className="card-actions">
                    <button className="btn" onClick={(e)=>openProfile(alumnus.id, e)}>View Profile</button>
                    <button className="mbtn">Message</button>
                  </div>
                </div>
              </article>
          )))}
        </section>

        {/* Pagination */}
        <section className="pagination">
          <div>Showing {(page-1)*pageSize + 1} - {Math.min(page*pageSize, total)} of {total}</div>
          <div className="page-controls">
            <button onClick={()=>setPage(1)} disabled={page===1}>«</button>
            <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>‹</button>
            <span>Page {page} / {totalPages}</span>
            <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}>›</button>
            <button onClick={()=>setPage(totalPages)} disabled={page===totalPages}>»</button>
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedAlumnus && (() => {
        const sel = alumniList.find(a => a.id === selectedAlumnus);
        if (!sel) return null;
        return (
          <div className="modal-overlay" role="dialog" aria-modal="true" onClick={closeProfile}>
            <div className="modal" onClick={(e)=>e.stopPropagation()}>
              <button className="modal-close" onClick={closeProfile}>✖</button>
              <header className="modal-header">
                <img src={sel.photo || "https://via.placeholder.com/120"} alt="" className="modal-avatar" />
                <div>
                  <h2>{sel.name}</h2>
                  <p>{sel.course} • Batch of {sel.year}</p>
                  <p>{sel.company}</p>
                </div>
              </header>

              <div className="modal-body">
                {sel.college && <p><strong>College:</strong> {sel.college}</p>}
                {sel.social && <p><strong>LinkedIn:</strong> <a href={sel.social} target="_blank" rel="noreferrer">{sel.social}</a></p>}
                {sel.coding && <p><strong>GitHub:</strong> <a href={sel.coding} target="_blank" rel="noreferrer">View</a></p>}
                {sel.procedure && <p><strong>Recruitment Procedure:</strong> {sel.procedure}</p>}
                {sel.questions && <p><strong>Questions Asked:</strong> {sel.questions}</p>}
                {sel.preparation && <p><strong>Preparation Tips:</strong> {sel.preparation}</p>}
              </div>

              <footer className="modal-footer">
                <button className="btn" onClick={closeProfile}>Close</button>
                {sel.social && <a className="btn-outline" href={sel.social} target="_blank" rel="noreferrer">Open LinkedIn</a>}
              </footer>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
