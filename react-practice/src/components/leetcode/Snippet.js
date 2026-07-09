import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [orgId, setOrgId] = useState("acme");

  useEffect(() => {
    fetch(`/api/users?org=${orgId}`)
      .then((r) => r.json())
      .then(setUsers);
  }, []); // ❌ orgId not in deps; no cleanup

  return (
    <div>
      <select value={orgId} onChange={(e) => setOrgId(e.target.value)}>
        <option value="acme">Acme</option>
        <option value="globex">Globex</option>
      </select>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
