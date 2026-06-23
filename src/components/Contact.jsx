import { useState, useRef } from 'react';
import styles from './Contact.module.css';
import useInView from '../hooks/useInView';
import PageHero from './PageHero';

export default function Contact({ standalone }) {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const formWrapRef = useRef(null);

  const sectionVisible = useInView(sectionRef);
  const infoVisible = useInView(infoRef);
  const formVisible = useInView(formWrapRef);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = true;
    if (!form.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <>
    {standalone && (
      <PageHero
        label="Get in Touch"
        title={<>Come Find Us, <em>We'll Have Bread.</em></>}
        subtitle="Custom cake orders, catering enquiries, or just to say hello — we'd love to hear from you."
      />
    )}
    <section id="contact" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Info Column */}
          <div
            ref={infoRef}
            className={`${styles.infoCol} ${infoVisible ? styles.visible : ''}`}
          >
            <span className={styles.label}>Get in Touch</span>
            <h2 className={styles.title}>Come Find Us,<br />We'll Have Bread.</h2>
            <p className={styles.subtitle}>
              Whether it's a custom cake order, a catering enquiry, or just to say hello —
              we'd love to hear from you. Our doors (and ovens) are always open.
            </p>

            <div className={styles.details}>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>📍</div>
                <div>
                  <div className={styles.detailLabel}>Visit Us</div>
                  <div className={styles.detailValue}>12 Sunshine Lane, Koregaon Park, Pune — 411001</div>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>🕐</div>
                <div>
                  <div className={styles.detailLabel}>Opening Hours</div>
                  <div className={styles.detailValue}>Tue – Sun · 7:30 AM – 8:00 PM</div>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>📞</div>
                <div>
                  <div className={styles.detailLabel}>Call Us</div>
                  <div className={styles.detailValue}>+91 98765 43210</div>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>✉️</div>
                <div>
                  <div className={styles.detailLabel}>Email</div>
                  <div className={styles.detailValue}>hello@hearthbakery.in</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div
            ref={formWrapRef}
            className={`${styles.formWrap} ${formVisible ? styles.visible : ''}`}
          >
            {!success ? (
              <>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSub}>Have a special order or question? Fill in below and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.group}>
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Priya Sharma"
                        className={errors.name ? styles.inputError : ''}
                      />
                    </div>
                    <div className={styles.group}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={errors.email ? styles.inputError : ''}
                      />
                    </div>
                  </div>

                  <div className={styles.group}>
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a topic…</option>
                      <option value="custom-order">Custom Cake / Pastry Order</option>
                      <option value="catering">Catering Enquiry</option>
                      <option value="wholesale">Wholesale Order</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.group}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind — or your wish list…"
                      className={errors.message ? styles.inputError : ''}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={loading}>
                    <span>✉️</span> {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.success}>
                <span className={styles.successIcon}>🎉</span>
                <h4 className={styles.successTitle}>Message Sent!</h4>
                <p className={styles.successText}>Thank you for reaching out! We'll be in touch within 24 hours. In the meantime, we'll save you a croissant. 🥐</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
