<?php

if (isset($_POST['number'])) {

    $number = $_POST['number'];

    echo "<table>";

    echo "<thead>";

    echo "<tr><th>X</th>";

    for ($i = 1; $i <= $number; $i++) {

        echo "<th>$i</th>";

    }

    echo "</tr></thead>";

    echo "<tbody>";

    for ($i = 1; $i <= $number; $i++) {

        echo "<tr><th>$i</th>";

        for ($j = 1; $j <= $number; $j++) {

            $result = $i * $j;

            echo "<td>$result</td>";

        }

        echo "</tr>";

    }

    echo "</tbody>";

    echo "</table>";

}

?>
