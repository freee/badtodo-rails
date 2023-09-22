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
    // パターンを動的に生成
    var pattern = new RegExp('(?!<\\/?(' + arrowTagString + ')(>|\\s[^>]*>))<("[^"]*"|\\\'[^\\\']*\\\'|[^\\\'">])*>', 'gim');
    str = str.replace(pattern, '');
    return str;
}
export default keepTag;
