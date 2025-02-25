import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      {/* 🔹 Main Content */}
      <Container className="text-center py-5">
        <h2 className="fw-bold text-success">Discover Your Natural Temperament</h2>
        <p className="text-muted fs-5">Analyze your Mizaj and receive personalized health recommendations.</p>

        {/* 🔹 Get Started Button */}
        <div className="d-flex justify-content-center my-4">
          <Button href="/assessment" variant="success" size="lg" className="px-4 shadow-sm">
            Get Started
          </Button>
        </div>

        {/* 🔹 Features Section */}
        <Row className="mt-5 g-4">
          <Col md={6} lg={4}>
            <FeatureCard
              title="Mizaj Analysis"
              img="/assets/feature1.webp"
              desc="Discover your temperament based on Unani principles."
              link="/assessment"
              variant="primary"
            />
          </Col>
          <Col md={6} lg={4}>
            <FeatureCard
              title="Live Health Tracking"
              img="/assets/feature2.webp"
              desc="Sync with your fitness band to monitor health."
              link="/tracking"
              variant="success"
            />
          </Col>
          <Col md={6} lg={4}>
            <FeatureCard
              title="Daily Insights"
              img="/assets/feature3.webp"
              desc="Personalized recommendations for food, sleep & exercise."
              link="/insights"
              variant="warning"
            />
          </Col>

          {/* Second Row - Two Cards Centered */}
          <Row className="justify-content-center g-4">
            <Col md={6} lg={4}>
              <FeatureCard
                title="Health Reports"
                img="/assets/feature4.webp"
                desc="Track your well-being with detailed reports."
                link="/reports"
                variant="danger"
              />
            </Col>
            <Col md={6} lg={4}>
              <FeatureCard
                title="NutriScan"
                img="/assets/feature5.webp"
                desc="Eat or skip? Let NutriScan guide your nutrition."
                link="/nutriscan"
                variant="info"
              />
            </Col>
          </Row>
        </Row>

        {/* 🔹 How It Works Section */}
        <HowItWorks />

        {/* 🔹 Why Choose Us Section */}
        <WhyChooseUs />
      </Container>

      {/* 🔹 Footer Section */}
      <Footer />
    </>
  );
}

/* 🔹 Feature Card Component */
function FeatureCard({ title, img, desc, link, variant }) {
  const navigate = useNavigate();

  return (
    <Card
      className={`shadow-lg border-0 text-center feature-card border-${variant} d-flex flex-column`}
      onClick={() => navigate(link)}
      style={{
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        borderRadius: "12px",
        height: "100%", // Equal height for all cards
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        alt={title}
        className="p-3"
        style={{ height: "120px", objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <h5 className="fw-bold text-success">{title}</h5>
        <p className="text-muted" style={{ minHeight: "60px" }}>{desc}</p>
        <Button variant={variant} className="px-4 shadow-sm mt-auto">
          Explore
        </Button>
      </Card.Body>
    </Card>
  );
}

/* 🔹 How It Works Section */
function HowItWorks() {
  return (
    <Container className="mt-5 text-center">
      <h3 className="fw-bold text-success">How It Works</h3>
      <Row className="mt-4 g-4">
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>Step 1: Take the Mizaj Test</h5>
            <p>Answer a few simple questions to determine your temperament.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>Step 2: Sync Your Data</h5>
            <p>Connect your fitness tracker to get live insights.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>Step 3: Get Personalized Insights</h5>
            <p>Receive daily health and wellness recommendations.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

/* 🔹 Why Choose Us Section */
function WhyChooseUs() {
  return (
    <Container className="mt-5 text-center">
      <h3 className="fw-bold text-success">Why Choose Us?</h3>
      <Row className="mt-4 g-4">
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>✅ Science-Backed Approach</h5>
            <p>Rooted in the ancient wisdom of Unani medicine.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>✅ Personalized Health Plans</h5>
            <p>Daily food, sleep, and exercise recommendations.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>✅ Real-Time Monitoring</h5>
            <p>Syncs with wearable devices for live health tracking.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

/* 🔹 Footer Component */
function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <Container>
        <p className="mt-3">&copy; 2025 Unani Health. All rights reserved.</p>
      </Container>
    </footer>
  );
}
