const Table = ({
  title,
  data,
  isSummary
}) => {
  const headers = Object.keys(data[0]).map((str) => str.toUpperCase());
  const contents = data.map(row => Object.values(row));
  return (
    <div className="table-app">
      <div className="table-title">{title}</div>
      {isSummary !== undefined &&
        <div className="table-summary">{isSummary}</div>
      }
      <table>
        <thead>
          <tr>
            {headers && headers.map((head, idx) => (
              <th scope={idx ? "" : "col"} key={idx}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contents && contents.map((content, idx) => (
            <tr key={idx}>
              {content.map((val, idx) => (
                <td scope={idx ? "" : "row"} data-label={headers[idx]} key={idx}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;