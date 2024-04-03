<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>diwoks掲示板</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <?php
    mb_internal_encoding("utf8");
    $pdo=new PDO("mysql:dbname=lesson01; host=localhost;","root","");
    $stmt=$pdo->query("select*from diworks_keijiban");
    
    
    ?>


    <header>
        <div class="img"><img src="./diblog_logo.jpg">
        </div>
        <div class="logo">
            <ul>
            <li>トップ</li>
            <li>プロフィール</li>
            <li>D.I.Blogについて</li>
            <li>登録フォーム</li>
            <li>問い合わせ</li>
            <li>その他</li>
            </ul>
        </div>
            
    </header>
    <main>
        <div class="main-container">
            <div class="left">
                <div class="leftbox">
                    <h1>プログラミングに役立つ掲示板</h1>
                    <br>
                    <div class="contactform">
                        <h2>入力フォーム</h2>
                        <form method="post" action="insert.php">
                            <div>
                                <label>ハンドルネーム</label>
                                <br>
                                <input type="text" class="text" size="35" name="handlename">
                            </div>

                            <div>
                                <label>タイトル</label>
                                <br>
                                <input type="text" class="text" size="35" name="title">
                            </div>

                            <div>
                                <label>コメント</label>
                                <br>
                                <textarea cols="35" rows="7" name="comments"></textarea>
                            </div>

                            <div>
                                <input type="submit" class="submit" value="送信する">
                            </div>

                        </form>

                        <?php
                            while($row=$stmt->fetch()){
                                echo "<div class='kiji'>";
                                
                                echo "<h4>".$row['title']."</h4>";
                                    echo "<div class='contents'>";
                                    echo $row['comments'];
                                        echo "<div class='handlename'>posted by".$row['handlename']. 
                                        "</div>";
                                    echo "</div>";
                                echo "</div>";
                            }
                        ?>
                    </div>
                </div>

            </div>
            <div class="right">
                <div class="rightbox">
                <br>
                <h3>人気の記事</h3>
                <ul>
                        <li>PHPオススメ本</li>
                        <li>PHP MyAdminの使い方</li>
                        <li>今人気のエディタTops</li>
                        <li>HTMLの基礎</li>
                    </ul>

                    <h3>オススメリンク</h3>
                    <ul>
                        <li>ﾃﾞｨｰｱｲﾜｰｸｽ株式会社</li>
                        <li>XAMPPのダウンロード</li>
                        <li>Eclipceのダウンロード</li>
                        <li>Braketsのダウンロード</li>
                    </ul>

                    <h3>カテゴリ</h3>
                    <ul>
                        <li>HTML</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>JavaScript</li>
                    </ul>                        
                </div>
            </div>
        </div>    
    </main>
    <footer>
            Copyright D.I.Works D.I.Blog is tha one which provides A to Z programming
    </footer>

</body>