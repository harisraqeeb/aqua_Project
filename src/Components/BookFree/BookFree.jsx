import React, { useState } from "react";
import "./BookFree.css";
import { COMPANY_CONFIG } from "../../config/company";

const BookFree = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    product: "19L Water Bottle",
    quantity: 1,
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.address.trim()) newErrors.address = "Delivery Address is required";
    if (!formData.product) newErrors.product = "Please select a product";
    if (!formData.quantity || formData.quantity < 1) newErrors.quantity = "Quantity must be at least 1";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      product: "19L Water Bottle",
      quantity: 1,
      address: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <section className="book-free-section" id="cta">
      <div className="book-free-banner" style={{ padding: "80px 40px" }}>
        <h2 className="book-free-title">
          Order Fresh <span>Aqua Clear</span> Water
        </h2>

        <p className="book-free-desc" style={{ maxWidth: "720px", marginBottom: "30px" }}>
          Place your drinking water delivery order below. Our customer support team will immediately process your request and confirm your delivery schedule.
        </p>

        {submitted ? (
          <div
            className="order-success-box"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              color: "#161D46",
              borderRadius: "20px",
              padding: "40px 30px",
              maxWidth: "600px",
              width: "100%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>✅</div>
            <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#0284C7", margin: "0 0 10px 0" }}>
              Order Received Successfully!
            </h3>
            <p style={{ fontSize: "16px", color: "#3E4354", lineHeight: "1.6", margin: "0 0 20px 0" }}>
              Thank you, <strong>{formData.fullName}</strong>! We have received your order for{" "}
              <strong>
                {formData.quantity} x {formData.product}
              </strong>. Our delivery team will reach out at <strong>{formData.phone}</strong> shortly to confirm your delivery to:
            </p>
            <div
              style={{
                background: "#F0F9FF",
                padding: "12px 16px",
                borderRadius: "10px",
                fontSize: "14px",
                color: "#0369A1",
                fontStyle: "italic",
                marginBottom: "24px",
              }}
            >
              📍 {formData.address}
            </div>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={handleReset}
                className="book-free-btn"
                style={{ width: "200px", height: "48px", marginTop: "0" }}
              >
                Place Another Order
              </button>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                  `Hi Aqua Clear, I just placed order #${Math.floor(1000 + Math.random() * 9000)} for ${formData.quantity}x ${formData.product}. My phone is ${formData.phone}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  height: "48px",
                  padding: "0 24px",
                  borderRadius: "30px",
                  background: "#25D366",
                  color: "#FFF",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(37,211,102,0.3)",
                }}
              >
                Track on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              maxWidth: "760px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              textAlign: "left",
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
              padding: "36px",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Full Name */}
            <div style={{ gridColumn: "span 1" }}>
              <label style={{ display: "block", color: "#FFF", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                style={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "12px",
                  border: errors.fullName ? "2px solid #EF4444" : "1px solid rgba(255,255,255,0.4)",
                  padding: "0 16px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                  background: "rgba(255,255,255,0.95)",
                  color: "#161D46",
                  outline: "none",
                }}
              />
              {errors.fullName && (
                <span style={{ color: "#FCA5A5", fontSize: "12px", marginTop: "4px", display: "block" }}>
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div style={{ gridColumn: "span 1" }}>
              <label style={{ display: "block", color: "#FFF", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +92 300 1234567"
                style={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "12px",
                  border: errors.phone ? "2px solid #EF4444" : "1px solid rgba(255,255,255,0.4)",
                  padding: "0 16px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                  background: "rgba(255,255,255,0.95)",
                  color: "#161D46",
                  outline: "none",
                }}
              />
              {errors.phone && (
                <span style={{ color: "#FCA5A5", fontSize: "12px", marginTop: "4px", display: "block" }}>
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div style={{ gridColumn: "span 1" }}>
              <label style={{ display: "block", color: "#FFF", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                style={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  padding: "0 16px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                  background: "rgba(255,255,255,0.95)",
                  color: "#161D46",
                  outline: "none",
                }}
              />
            </div>

            {/* Product Selection */}
            <div style={{ gridColumn: "span 1" }}>
              <label style={{ display: "block", color: "#FFF", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>
                Select Product *
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "12px",
                  border: errors.product ? "2px solid #EF4444" : "1px solid rgba(255,255,255,0.4)",
                  padding: "0 16px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                  background: "rgba(255,255,255,0.95)",
                  color: "#161D46",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="19L Water Bottle">19L Water Bottle (Dispenser Refill)</option>
                <option value="12L Water Bottle">12L Water Bottle (Handle Bottle)</option>
                <option value="1.5L Bottled Water">1.5L Bottled Water Pack (6/12 Bottles)</option>
                <option value="500ml Bottled Water">500ml Bottled Water Pack (12/24 Bottles)</option>
                <option value="Bulk Water Supply">Bulk Water Supply (Events / Offices)</option>
              </select>
            </div>

            {/* Quantity */}
            <div style={{ gridColumn: "span 2" }}>
              <label style={{ display: "block", color: "#FFF", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>
                Quantity / Number of Bottles *
              </label>
              <input
                type="number"
                name="quantity"
                min="1"
                max="100"
                value={formData.quantity}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "12px",
                  border: errors.quantity ? "2px solid #EF4444" : "1px solid rgba(255,255,255,0.4)",
                  padding: "0 16px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                  background: "rgba(255,255,255,0.95)",
                  color: "#161D46",
                  outline: "none",
                }}
              />
            </div>

            {/* Delivery Address */}
            <div style={{ gridColumn: "span 2" }}>
              <label style={{ display: "block", color: "#FFF", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>
                Delivery Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={2}
                placeholder="House/Apartment #, Street, Block, Area, City"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  border: errors.address ? "2px solid #EF4444" : "1px solid rgba(255,255,255,0.4)",
                  padding: "12px 16px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                  background: "rgba(255,255,255,0.95)",
                  color: "#161D46",
                  outline: "none",
                  resize: "vertical",
                }}
              />
              {errors.address && (
                <span style={{ color: "#FCA5A5", fontSize: "12px", marginTop: "4px", display: "block" }}>
                  {errors.address}
                </span>
              )}
            </div>

            {/* Special Instructions / Message */}
            <div style={{ gridColumn: "span 2" }}>
              <label style={{ display: "block", color: "#FFF", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>
                Special Instructions / Delivery Notes
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                placeholder="e.g. Call before delivery, Leave with security, Recurring weekly delivery required..."
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  padding: "12px 16px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                  background: "rgba(255,255,255,0.95)",
                  color: "#161D46",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Submit Button */}
            <div style={{ gridColumn: "span 2", textAlign: "center", marginTop: "10px" }}>
              <button type="submit" className="book-free-btn" style={{ margin: "0 auto", width: "100%", maxWidth: "340px" }}>
                PLACE ORDER
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default BookFree;