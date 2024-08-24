import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./index.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="tool-bar flex items-center justify-between p-5">
      <NavLink className="logo font-semibold" to="/">
        Decidou
      </NavLink>
      <nav>
        <section className="flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li>
                <NavLink
                  className="navlinks font-semibold border-b border-gray-400 my-8 uppercase"
                  to="/decide"
                  onClick={() => setIsNavOpen(false)}
                >
                  Random Decision
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navlinks font-semibold border-b border-gray-400 my-8 uppercase"
                  to="/task"
                  onClick={() => setIsNavOpen(false)}
                >
                  Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navlinks font-semibold border-b border-gray-400 my-8 uppercase"
                  to="/food"
                  onClick={() => setIsNavOpen(false)}
                >
                  Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navlinks font-semibold border-b border-gray-400 my-8 uppercase"
                  to="/answer"
                  onClick={() => setIsNavOpen(false)}
                >
                  Answer
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navlinks font-semibold border-b border-gray-400 my-8 uppercase"
                  to="/coin"
                  onClick={() => setIsNavOpen(false)}
                >
                  Coin
                </NavLink>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-10 lg:flex">
          <li>
            <NavLink className="navlinks font-semibold" to="/decide">
              Random Decision
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinks font-semibold" to="/task">
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinks font-semibold" to="/food">
              Food
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinks font-semibold" to="/answer">
              Answer
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinks font-semibold" to="/coin">
              Coin
            </NavLink>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #a1c4e4;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
