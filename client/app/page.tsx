const stats = [
  { label: "Total Projects", value: "24" },
  { label: "Completed", value: "16" },
  { label: "In Progress", value: "6" },
  { label: "Delayed", value: "2" },
];

const projects = [
  {
    name: "Website Redesign",
    team: "Design",
    status: "In Progress",
    progress: 72,
  },
  {
    name: "Mobile Application",
    team: "Engineering",
    status: "In Progress",
    progress: 54,
  },
  {
    name: "Data Migration",
    team: "Data",
    status: "Completed",
    progress: 100,
  },
  {
    name: "Marketing Campaign",
    team: "Marketing",
    status: "Delayed",
    progress: 38,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 bg-slate-900 p-6 text-white md:block">
          <h1 className="mb-10 text-xl font-bold">
            Project Analytics
          </h1>

          <nav className="space-y-2">
            <div className="rounded-lg bg-slate-700 px-4 py-3">
              Dashboard
            </div>
            <div className="px-4 py-3 text-slate-300">Projects</div>
            <div className="px-4 py-3 text-slate-300">Tasks</div>
            <div className="px-4 py-3 text-slate-300">Teams</div>
            <div className="px-4 py-3 text-slate-300">Analytics</div>
          </nav>
        </aside>

        {/* Main content */}
        <section className="flex-1 p-6 md:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">
              Project Management Dashboard
            </h2>
            <p className="mt-2 text-slate-500">
              Monitor projects, tasks, teams and business performance.
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                Project Performance
              </h3>
              <p className="text-sm text-slate-500">
                Current project progress overview
              </p>
            </div>

            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{project.name}</p>
                      <p className="text-sm text-slate-500">
                        {project.team}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {project.status}
                      </p>
                      <p className="text-sm text-slate-500">
                        {project.progress}%
                      </p>
                    </div>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-slate-900"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics placeholder */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                Tasks by Priority
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Analytics will be connected to PostgreSQL later.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                Team Performance
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Real performance metrics will be added during the
                analytics phase.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}