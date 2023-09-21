/**
 * HTMLタグを文字列から除去する
 * 第二引数にHTMLタグを指定した場合、指定されたHTMLタグは除去されずに残る
 */

export const keepTag=(str:string, arrowTag:Array<string>)=>{
    // 配列形式の場合は'|'で結合
    let arrowTagString; 
    if (Array.isArray(arrowTag)) {
        arrowTagString = arrowTag.join('|');
    }
    else{
        arrowTagString = '';
    }
    console.log(arrowTagString);
    // パターンを動的に生成
    var pattern = new RegExp('(?!<\\/?(' + arrowTagString + ')(>|\\s[^>]*>))<("[^"]*"|\\\'[^\\\']*\\\'|[^\\\'">])*>', 'gim');
    //var pattern = new RegExp('<?!(\\/?'+arrowTagString+')(.|\s)*?>','gim');
    console.log(pattern);
    str = str.replace(pattern, '');
    console.log(str);
    return str;
}
export default keepTag;
// Alias
// var log = function (arg) { console.log(arg); };

// // ページ全体のHTMLを取得
// var htmlString = document.documentElement.outerHTML || document.documentElement.innerHTML;

// // 全てのHTMLタグを除去
// log(removeTag(htmlString));

// // a タグのみ許容
// log(removeTag(htmlString, 'a'));

// // a タグ、 span タグを許容
// log(removeTag(htmlString, ['a', 'span']));

// // 閉じタグが無いタイプのタグもOK(inputなど)
// log(removeTag(htmlString, 'input'));