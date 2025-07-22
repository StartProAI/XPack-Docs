---
sidebar_position: 3
title: "📜 Changelog"
---

## 📦 Version: `v0.1`  
**Date**: 2025-07-20  
**License**: Apache 2.0  

---

We are excited to release **XPack Open Source**, a lightweight monetizable MCP marketplace framework that enables developers and teams to rapidly build their own AI-native service marketplace.

#### 🔧 Core Highlights:
- **Multi-tenant MCP Marketplace Framework**  
  Easy to deploy, maintain, and scale — ideal for building your internal or public MCP service store.

- **Core Modules Included**:  
  - MCP Service Management  
  - Pricing & Billing  
  - User Account System  
  - Payment Gateway Integration

- **One-click OpenAPI → MCP Config**  
  Upload or input an OpenAPI/Swagger file or URL — the system will parse it and generate the MCP config automatically. You can edit and publish the service with just a few clicks.

- **Service Status Control**  
  Easily toggle services online/offline. Offline services are hidden or blocked from access by users — useful for staging or deprecated APIs.

- **Billing Models**:
  - ✅ Per-Call Charging *(Supported in this version)*  
    e.g., $0.01 per call (configurable)
  - 🔜 Token-Based Charging *(Coming in future versions)*  
    e.g., $0.02 per 1K tokens consumed by LLMs

#### 👥 User Roles:
- **Normal Users**  
  Register, browse, and call MCP services; consume account balance.
- **Administrators**  
  Manage all services, pricing, payments, and global stats.

#### 🔐 User Authentication:
- Supports **email/password registration**  
- Supports **Google OAuth login**