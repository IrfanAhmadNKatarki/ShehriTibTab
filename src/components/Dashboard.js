import { Card } from "react-bootstrap";
export default function Dashboard() {
    return (
      <div className="text-center py-5">
        <h2 className="fw-bold text-success">Discover Your Natural Temperament</h2> {/* ✅ Green heading */}
        <p className="text-muted">Analyze your Mizaj and receive personalized health recommendations.</p>
        
        <div className="d-grid gap-2 col-6 mx-auto">
          <a href="/assessment" className="btn btn-success btn-lg">Get Started</a> {/* ✅ Green button */}
        </div>
  
        {/* 🔹 Features Section */}
        <div className="row mt-5">
          <FeatureCard title="Mizaj Analysis" img="/assets/feature1.webp" desc="Discover your temperament based on Unani principles." />
          <FeatureCard title="Live Health Tracking" img="/assets/feature2.webp" desc="Sync with your fitness band to monitor health." />
          <FeatureCard title="Daily Insights" img="/assets/feature3.webp" desc="Personalized recommendations for food, sleep & exercise." />
          <FeatureCard title="Health Reports" img="/assets/feature4.webp" desc="Track your well-being with detailed reports." />
          <center><FeatureCard title="NutriScan" img="/assets/feature5.jpeg" desc="Eat or skip? Let Nutriscan equip" /></center>
        </div>
      </div>
    );
  }
  
  /* 🔹 Feature Card Component */
  function FeatureCard({ title, img, desc }) {
    return (
      <div className="col-md-6 mb-4">
        <Card className="shadow-lg p-3 bg-light rounded text-center border-success"> {/* ✅ Light green background & border */}
          <img src={img} alt={title} className="img-fluid mx-auto" style={{ height: "100px" }} />
          <Card.Body>
            <h5 className="fw-bold text-success">{title}</h5> {/* ✅ Green title */}
            <p className="text-muted">{desc}</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
  