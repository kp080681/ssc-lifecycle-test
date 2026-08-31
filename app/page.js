export default function Home() {
  const sscTestRequired = process.env.SSC_TEST_REQUIRED;

  return (
    <main style={{ maxWidth: 720, margin: "80px auto", padding: 24 }}>
      <p style={{ fontSize: 14, opacity: 0.6 }}>Small Software Cloud</p>
      <h1>Lifecycle test workload</h1>
      <p>This application is intentionally disposable.</p>
      <p>STATUS: HEALTHY</p>
      <span hidden>{sscTestRequired}</span>
    </main>
  );
}
