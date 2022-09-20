export const PageName = (params, { children }) =>
  <div className="mb-4 mt-4 my-5" >
    {children}
    <h2>{params.title}</h2>
  </div>