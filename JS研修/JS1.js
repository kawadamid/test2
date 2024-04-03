/*問１変数starが1から5以下まで繰り返し１ずつ増やす、★を書く*/

for(var star=1; star<=5; star++){
    document.write("★");
}

document.write("<br><br>");
/*問２*変数aが１から3以下まで繰り返し1ずつ増やす、
その間変数starが１から３以下まで★を書く。その後改行する*/
for(var a=1; a<=2; a++){
    for(var star=1; star<=3; star++){
        document.write("★");
    }
    document.write("<br>");
}


document.write("<br><br>");    
/*問３変数starが1から２以下まで繰り返し１ずつ増やす
その間変数starが1から５以下まで☆を書く、その後改行する*/
for(var a=1; a<=2; a++){
    for(var star=1; star<=5; star++){
        document.write("☆");
    }
    document.write("<br>");
}



document.write("<br><br>");    
/*問４変数starが1から４以下まで繰り返し１ずつ増やす
その間変数starが1から５以下まで★を書く、その後改行する*/
for(var a=1; a<=4; a++){
    for(var star=1; star<=5; star++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br><br>");    
/*問５変数aが1から４以下まで繰り返し１ずつ増やす
その間変数starが1から３以下まで★を書く、その後改行する*/
for(var a=1; a<=4; a++){
    for(var star=1; star<=3; star++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br><br>");    
/*問６no1が0から始まる、3より小さい数まで１ずつ増える。
その間no2が0から始まり3より小さい数の間１つずつ増える。
no2割る2が０の時★を書く、そうではないとき☆を書く。
no2が0~3まで繰り返したら改行する*/
for(var no1=0; no1<3; no1++){
    for(var no2=0; no2<3; no2++){
        if(no2 % 2==0){
            document.write("★");
        }
        else{
            document.write("☆");
        }
    }
    document.write("<br>");
}

document.write("<br><br>"); 
/*問７no1が0~4までの間繰り返す１つ増やすを繰り返す。
その間no2が0~5までの間１つ増やすを繰り返す
no2割る2が０の時★を書く、そうではないとき☆を書く。
no2が0~4まで繰り返したら改行する*/
for(var no1=0; no1<4; no1++){
    for(var no2=0; no2<5; no2++){
        if(no2 % 2==0){
            document.write("★");
        }
        else{
        document.write("☆");
        }
    }
    document.write("<br>");
}

document.write("<br><br>"); 
/*問８　starは空欄です。変数ｎが０～５より小さいまで１ずつ増えます。
その間starはstarに★文字列を足します。
新しく定義されたstarを書いて改行します。を繰り返します。*/
var star=""
for(var n=0; n<5; n++){
    star=star+"★";
    document.write(star+"<br>");
}

