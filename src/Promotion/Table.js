const Table = ({
  title,
  data,
  isSummary
}) => {
  const headers = Object.keys(data[0]);
  const contents = data.map(row => Object.values(row));
  return (
    <div className="table-app">
      <div className="table-title">{title}</div>
      {isSummary !== undefined &&
        <div>{isSummary}</div>
      }
      <table>
        <thead>
          <tr>
            {headers && headers.map((head, idx) => (
              <th key={idx}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contents && contents.map((content, idx) => (
            <tr key={idx}>
              {content.map((val, idx) => (
                <td key={idx}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;