import Link from "next/link";
import { profile } from "@/lib/content";
import { Icon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <div>
          <Link href="/" className="footer-name">
            {profile.name}
            <span className="observation-dot" />
          </Link>
          <p>Medicine, with the person in view.</p>
        </div>
        <div className="footer-identity">
          MBChB student · Moi University
          <br />
          College of Health Sciences · Eldoret, Kenya
        </div>
        <a href="#top" className="back-top">
          Back to top
          <Icon name="arrow-up" />
        </a>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Professional portfolio. Educational reflections.</p>
        <Link href="/#contact">
          Get in touch <Icon name="arrow-up" />
        </Link>
      </div>
      {profile.contentStatus === "example" && (
        <p className="preview-notice">
          Design preview · An illustrative student profile. Projects are
          proposed concepts; personal narrative awaits the owner’s review.
        </p>
      )}
    </footer>
  );
}
