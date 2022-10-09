<?php
function nav_item(string $lien, string $titre, string $linkClasse = ''): string
{
  $classe = 'nav-item';
  if($_SERVER['SCRIPT_FILENAME'] === $lien){
    $classe = $classe . ' active';
  }
  return <<<HTML
    <li class="$classe">
        <a class="$linkClasse" href=" $lien "> $titre </a>
    </li>
HTML;    
}

function nav_menu (string $linkClasse= ''): string
{
  return
      nav_item('/index.php', 'Accueil', $linkClasse) .
      nav_item('/contact.php', 'Contact', $linkClasse);
}
?>