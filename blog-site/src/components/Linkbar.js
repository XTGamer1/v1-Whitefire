import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Linkbar() {
  return (
    <div class="linkbar shadow p-1 mb-5 border-top bg-body-tertiary rounded">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link" to="#">
            Html
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">
            Css
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">
            JS
          </Link>
        </li>
      </ul>
    </div>
  );
}
