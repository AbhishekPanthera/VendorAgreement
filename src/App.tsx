type StatCardProps = {
  label: string;
  value: string;
  tone?: 'primary' | 'success' | 'neutral';
};

const statCards: StatCardProps[] = [
  { label: 'Active vendors', value: '12', tone: 'primary' },
  { label: 'Draft agreements', value: '04', tone: 'neutral' },
  { label: 'Renewals due', value: '02', tone: 'success' }
];

function StatCard({ label, value, tone = 'neutral' }: StatCardProps) {
  return (
    <div className={`stat-card ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Legal operations</p>
          <h1>Vendor Agreement Studio</h1>
        </div>
        <button className="primary-button">New agreement</button>
      </header>

      <main className="content-grid">
        <section className="panel main-panel">
          <div className="panel-header">
            <h2>Agreement intake</h2>
            <span className="status-pill">Draft</span>
          </div>

          <div className="stats-row">
            {statCards.map((card) => (
              <StatCard key={card.label} {...card} />
            ))}
          </div>

          <div className="form-grid">
            <label>
              Client Legal Name
              <input type="text" placeholder="Enter client name" />
            </label>
            <label>
              Vendor Name
              <input type="text" placeholder="Enter vendor name" />
            </label>
            <label>
              Effective Date
              <input type="date" />
            </label>
            <label>
              Contract Value
              <input type="text" placeholder="USD 25,000" />
            </label>
          </div>

          <div className="section-block">
            <h3>Scope of work</h3>
            <ul>
              <li>Provide onboarding and implementation support</li>
              <li>Deliver monthly reporting and SLA tracking</li>
              <li>Maintain security and confidentiality obligations</li>
            </ul>
          </div>

          <div className="button-row">
            <button className="secondary-button">Save draft</button>
            <button className="primary-button">Generate document</button>
          </div>
        </section>

        <aside className="panel sidebar-panel">
          <h3>Checklist</h3>
          <ul className="checklist">
            <li className="done">Client details captured</li>
            <li className="done">Vendor entity verified</li>
            <li className="pending">Commercial terms pending</li>
            <li className="pending">Termination clause review pending</li>
          </ul>

          <div className="mini-card">
            <p className="mini-label">Governing law</p>
            <strong>New York, USA</strong>
          </div>
        </aside>
      </main>
    </div>
  );
}
