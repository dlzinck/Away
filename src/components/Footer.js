import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subsctription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to recieve our best vacation deals!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at anytime.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscripe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a
              href="https://dlzinck.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              How it works
            </a>
            <a
              href="https://dlzinck.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Testimonials
            </a>
            <a
              href="https://dlzinck.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Careers
            </a>
            <a
              href="https://dlzinck.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Investors
            </a>
            <a
              href="https://dlzinck.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Service
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <a
              href="https://dlzinck.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
            <a
              href="https://dlzinck.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Support
            </a>
            <a
              href="https://dlzinck.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Destinations
            </a>
            <a
              href="https://dlzinck.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Sponsorships
            </a>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <a
                href="https://dlzinck.github.io/Portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                Submit Video
              </a>
              <a
                href="https://dlzinck.github.io/Portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                Ambassadors
              </a>
              <a
                href="https://dlzinck.github.io/Portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                Agency
              </a>
              <a
                href="https://dlzinck.github.io/Portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                Influencer
              </a>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <a
                href="https://dlzinck.github.io/Portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://dlzinck.github.io/Portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://dlzinck.github.io/Portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
              <a
                href="https://dlzinck.github.io/Portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/Away" className="social-logo">
                Away
                <i className="far fa-paper-plane" />
              </Link>
            </div>
            <small className="website-rights">Away © 2022</small>
            <div className="social-icons">
              <Link
                className="social-icon-link facebook"
                to="/Away"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link instagram"
                to="/Away"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="social-icon-link youtube"
                to="/Away"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="social-icon-link twitter"
                to="/Away"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                className="social-icon-link twitter"
                to="/Away"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
