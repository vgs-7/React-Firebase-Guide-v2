# React Router Dom
> Used to show different components based on URL

## Installation

Run `npm install react-router-dom`

---
## Setup your App.js

Import react-router-dom

```
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
```

Import the pages you want to render


```
import Home from './pages/Home'
```

Return the Router and Routes inside the App component

```
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
```

---
## Add new pages 

Import the page component
```
import About from './pages/About.js'
```
Add a Route to link the url '.../about' to the About component
```
        <Route path="/about" element={<About />} />
```
---
## Navigate to a new page

Import the UseNavigation function
```
import { useNavigate } from 'react-router-dom'
```

Create a `navigate` function
```
const navigate = UseNavigation()
```

Navigate to a page
```
navigate('/about')
```
