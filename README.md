# Minneapolewis Blog

A personal blog application with authentication and post management, powered by Netlify and Firebase.

## 🎉 Recent Update: Migrated to Firebase!

This application has been migrated from Supabase to **Firebase Firestore** for free, permanent database hosting.

## ⚡ Quick Setup

**New to this project?** Start here: [`QUICKSTART.md`](QUICKSTART.md)

**Need detailed instructions?** See: [`FIREBASE_SETUP.md`](FIREBASE_SETUP.md)

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get up and running in 3 steps (~10 minutes)
- **[FIREBASE_SETUP.md](FIREBASE_SETUP.md)** - Complete Firebase setup guide
- **[ENV_VARIABLES.md](ENV_VARIABLES.md)** - Environment variables reference
- **[MIGRATION_SUMMARY.md](MIGRATION_SUMMARY.md)** - What changed in the migration
- **[MIGRATION_CHECKLIST.md](MIGRATION_CHECKLIST.md)** - Setup progress tracker

## 🚀 Features

- **User Authentication** - Netlify Identity for secure login
- **Create Posts** - Write and publish blog posts
- **View Posts** - Browse all published posts
- **Rate Limiting** - Prevent spam (5 posts/hour per user)
- **Music Player** - Integrated YouTube playlist player
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Works on all devices

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Netlify Functions
- **Database**: Firebase Firestore
- **Authentication**: Netlify Identity
- **Hosting**: Netlify
- **APIs**: YouTube Data API (for music player)

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm
- Firebase account (free)
- Netlify account (free)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd minneapolewis
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd netlify/functions
   npm install
   cd ../..
   ```

3. **Configure Firebase**
   - Follow [`FIREBASE_SETUP.md`](FIREBASE_SETUP.md)
   - Update `js/firebaseclient.js` with your config

4. **Set environment variables**
   - See [`ENV_VARIABLES.md`](ENV_VARIABLES.md)
   - Create `.env` file for local testing

5. **Run locally** (optional)
   ```bash
   npm install -g netlify-cli
   netlify dev
   ```

## 🌐 Deployment

### Deploy to Netlify

1. Connect your repository to Netlify
2. Configure environment variables (see [`ENV_VARIABLES.md`](ENV_VARIABLES.md))
3. Deploy!

Netlify will automatically:
- Build your site
- Deploy Netlify Functions
- Enable Netlify Identity

## 📝 Usage

### Create a Post

1. Navigate to `/create.html`
2. Log in with Netlify Identity
3. Write your post (title and content)
4. Submit

### View Posts

- Homepage (`/index.html`) displays all posts
- Posts show username and timestamp
- Newest posts appear first

## 🔒 Security

- All database writes go through Netlify Functions (not direct from client)
- Firebase security rules prevent unauthorized access
- Rate limiting prevents abuse
- Sensitive credentials stored in environment variables

## 🎯 Firebase Free Tier

Perfect for personal blogs:
- **50,000 reads/day**
- **20,000 writes/day**
- **1 GB storage**
- No credit card required

## 🐛 Troubleshooting

### Common Issues

**"Server configuration error"**
- Check Netlify environment variables
- Verify all 3 Firebase variables are set

**Posts not appearing**
- Check browser console for errors
- Verify Firebase is initialized
- Check Firestore security rules

**Can't create posts**
- Ensure you're logged in
- Check rate limit (5 posts/hour)
- Verify Netlify Function logs

See [`FIREBASE_SETUP.md`](FIREBASE_SETUP.md) for more troubleshooting tips.

## 📁 Project Structure

```
minneapolewis/
├── css/
│   └── styles.css           # Main stylesheet
├── js/
│   ├── firebaseclient.js    # Firebase configuration (update this!)
│   └── supabaseclient.js    # Legacy file (unused)
├── netlify/
│   └── functions/
│       ├── posts.js         # Main API endpoint
│       └── package.json     # Function dependencies
├── images/                  # Logos and icons
├── index.html              # Homepage with post feed
├── create.html             # Create post page
├── script.js               # Main JavaScript logic
├── package.json            # Root dependencies
├── QUICKSTART.md          # Quick setup guide
├── FIREBASE_SETUP.md      # Detailed Firebase guide
└── ENV_VARIABLES.md       # Environment variables reference
```

## 🤝 Contributing

This is a personal project, but feel free to fork and customize for your own use!

## 📄 License

ISC

## ✨ Credits

Created by Lewis

---

**Getting Started?** → Read [`QUICKSTART.md`](QUICKSTART.md)

**Need Help?** → Check [`FIREBASE_SETUP.md`](FIREBASE_SETUP.md)

**Questions?** → See the troubleshooting sections in the docs
