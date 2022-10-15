function List() {
//   <>
//   <Table>
//   <thead>
//     <tr>
//       <th>
//         #
//       </th>
//       <th>
//         First Name
//       </th>
//       <th>
//         Last Name
//       </th>
//       <th>
//         Username
//       </th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">
//         1
//       </th>
//       <td>
//         Mark
//       </td>
//       <td>
//         Otto
//       </td>
//       <td>
//         @mdo
//       </td>
//     </tr>
//     <tr>
//       <th scope="row">
//         2
//       </th>
//       <td>
//         Jacob
//       </td>
//       <td>
//         Thornton
//       </td>
//       <td>
//         @fat
//       </td>
//     </tr>
//     <tr>
//       <th scope="row">
//         3
//       </th>
//       <td>
//         Larry
//       </td>
//       <td>
//         the Bird
//       </td>
//       <td>
//         @twitter
//       </td>
//     </tr>
//   </tbody>
// </Table>
// </>
  return(
    
    <table class="table table-striped table-hove">
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">글쓴이</th>
            <th scope="col">날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td colspan="2">첫번째 글이고 싶어요</td>
            <td>Otto</td>
            <td>@22-10-10</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td colspan="2">두번째 글인가요</td>
            <td>Thornton</td>
            <td>@22-10-8</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">난 세번째</td>
            <td>river</td>
            <td>@22-10-3</td>
          </tr>
        </tbody>
      </table>

      

  )
}
export default List