import Deacon from "./Events.jsx";

export default function Calendar() {
  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
        <tr>
          <td>8 am</td>
          <td></td>
          <td></td>
          <td></td>

          <Deacon name="Dn. Nahom" number="555-1234" color="green" />

          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10 am</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>11 am</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

          <Deacon name="Dn. Nahom" number="555-1234" color="pink" />

          <td></td>
        </tr>
        <tr>
          <td>12 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2 pm</td>

          <Deacon name="Dn. Nahom" number="555-1234" color="green" />

          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
