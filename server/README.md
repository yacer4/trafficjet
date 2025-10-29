# Traffic Jet Media Backend

Express server for handling contact form submissions and sending emails.

## Setup

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the server directory (copy from `.env.example`):

```bash
cp .env.example .env
```

Fill in your SMTP credentials:
- **SMTP_HOST**: Your domain's SMTP server (e.g., mail.trafficjet.media)
- **SMTP_PORT**: Usually 587 (TLS) or 465 (SSL)
- **SMTP_SECURE**: Set to `true` for port 465, `false` for 587
- **SMTP_USER**: Your email address
- **SMTP_PASS**: Your email password or app-specific password
- **SMTP_FROM**: The email address emails will be sent from

### 3. Run the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will run on port 5000 (or the PORT specified in .env).

## API Endpoints

### POST /api/contact

Sends a contact form submission email to support@trafficjet.media and a confirmation email to the user.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "business": "My Business",
  "message": "I'm interested in your services..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## Common Issues

### "Failed to authenticate"
- Check your SMTP credentials
- Some email providers require app-specific passwords
- Ensure "Less secure apps" is enabled (if using Gmail)

### "Connection refused"
- Verify SMTP_HOST and SMTP_PORT are correct
- Check if your firewall blocks the SMTP port

### "Email rejected"
- Verify SMTP_FROM matches an authorized sender
- Check domain SPF/DKIM records

## Frontend Configuration

In the frontend (`.env` file in root):
```
VITE_API_URL=http://localhost:5000
```

For production, set to your server URL:
```
VITE_API_URL=https://api.trafficjet.media
```
