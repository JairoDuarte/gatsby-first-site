import React from "react";

export default function counter({ pageContext }) {
  return (
    <div>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
      <h1>Contador</h1>
      Outros dados
    </div>
  );
}
