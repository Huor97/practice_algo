<?php
function square_sum($numbers) {
	$i = 0;
    $sum = 0;
	while($i <= count($numbers) - 1){
		$sum = $sum + $numbers[$i] ** 2;
        $i++;
	}
	echo $sum;
}
square_sum([-1,-2]);
?>
