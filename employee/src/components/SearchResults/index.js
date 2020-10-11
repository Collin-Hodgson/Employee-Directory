import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table class="table table-striped table-inverse table-responsive">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Employee Image</th>
          <th scope="col">Last Name</th>
          <th scope="col">First Name</th>
          <th scope="col">Cell Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td scope="row"></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default SearchResults;
