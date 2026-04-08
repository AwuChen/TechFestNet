# TechFestNet

USC TechFest live networking graph: React + Neo4j Aura + [react-force-graph](https://github.com/vasturiano/react-force-graph) (2D canvas).

## Neo4j

Connection defaults are set for Aura instance **c9b42b11** (`neo4j+s://c9b42b11.databases.neo4j.io`). Override with `REACT_APP_NEO4J_URI` in `react-graph-viz/.env` if you switch instances. Canonical values live in `Cred/Neo4j-TechFestNet-Aura.txt` (including the HTTP Query API URL for external tools).

The main app lives in `react-graph-viz/`. Use `npm install` and `npm start` there for local development.
