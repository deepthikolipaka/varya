# varya
Vayra

Vayra is an early-stage developer intelligence tool that helps developers see and understand their codebases visually.

Upload a repository → Vayra parses your code → generates an interactive graph showing how functions, files, and modules connect.

🧠 Problem

Developers spend too much time trying to understand existing codebases.
Documentation gets outdated, and AI tools mainly focus on writing code — not explaining it.

Vayra solves this by building a visual map of your code, helping developers explore and comprehend complex systems faster.

🧩 Features

📂 Upload a code file or small repo

🧠 Parse code using Tree-sitter to extract structure

🌐 Visualize the project as a graph using Cytoscape.js

🔍 Click any node to view details and relationships

⚙️ Ready for AI-based explanations (coming soon)

🏗️ Tech Stack

Frontend: React + Cytoscape.js
Backend: Node.js + Express
Parser: Tree-sitter (Python grammar)
Database (future): MongoDB
Hosting (dev): Render / Vercel


