<?php
include_once "conexao.php";
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>MIPS WEB - teste BD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
        <script type="text/javascript" src="main.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script>
            $( function() {
                $( "#executor" ).sortable({
                revert: true
                });
                $( ".instrução" ).draggable({
                connectToSortable: "#executor",
                helper: "clone",
                revert: "invalid"
                });
                $( "ul, li" ).disableSelection();
                $('#campode_exclusao').droppable({
                    drop: function(event, ui) {
                        $(ui.draggable).remove();
                    }
                });
            });
        </script>
    </head>
    <body>
        <h1>Simulator</h1>
        <ul id="registers">
            <p>Registradores</p>
            <?php
                $registers = "SELECT * FROM register";
                $g_registers = mysqli_query($conn, $registers);
                while($row = mysqli_fetch_assoc($g_registers))
                {
                    ?>
                    <li id = "<?php echo $row['id']; ?>" class = "register">
                        <?php
                            echo $row['id'];
                        ?>
                        <?php
                            echo $row['value'];
                        ?>
                    </li>
                    <?php
                }
            ?>
        </ul>
        <form>
            <ul id="gerador">
                <h1>Instruções</h1>
                <?php
                $result_aulas = "SELECT * FROM base";
                $resultado_aulas = mysqli_query($conn, $result_aulas);
                while($row_aulas = mysqli_fetch_assoc($resultado_aulas)){
                    ?>
                    <li id="arrayordem_<?php echo $row_aulas['id']; ?>" class="instrução">
                        <img src="<?php echo $row_aulas['img'];?>" alt="soma">
                    </li>
                    <?php
                }
                ?>
            </ul>
            <ul id="executor">
                <h1>Execução</h1>
            </ul>
            <ul id="campode_exclusao"> 
                <h1>Lixeira</h1>
            </ul>
        </form>
        <datalist id="r" >
            <option value="$zero" >0</option>
            <option value="$v0">2</option>
            <option value="$v1">3</option>
            <option value="$a0">4</option>
            <option value="$a1">5</option>
            <option value="$a2">6</option>
            <option value="$a3">7</option>
            <option value="$t0">8</option>
            <option value="$t1">9</option>
            <option value="$t2">10</option>
            <option value="$t3">11</option>
            <option value="$t4">12</option>
            <option value="$t5">13</option>
            <option value="$t6">14</option>
            <option value="$t7">15</option>
            <option value="$s0">16</option>
            <option value="$s1">17</option>
            <option value="$s2">18</option>
            <option value="$s3">19</option>
            <option value="$s4">20</option>
            <option value="$s5">21</option>
            <option value="$s6">22</option>
            <option value="$s7">23</option>
            <option value="$sp">29</option>
            <option value="$ra">31</option>
        </datalist> 
    </body>
</html>