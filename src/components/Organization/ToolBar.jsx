import { useState, useEffect, React } from 'react';
import { AccountType } from '../../enums/Enums';

function ToolBar({ search, handleSearchChange }) {

  return (
    <div className="toolbar">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="searchbar"
      />
    </div>
  );
}

export default ToolBar;
