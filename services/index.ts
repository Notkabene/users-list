export default {
  formatNumberWithK(number: number) {
    const num = !Number.isFinite(Number(number)) ? 0 : Number(number);
    const stringNum = String(num);

    if(stringNum.length > 6) {
      return `${Math.floor(number / 100000) / 10}M`;
    }

    if (stringNum.length > 3) {
      return `${Math.floor(num / 1000)}K`;
    } 
    return number;
  },
  formatNumber(number: string | number, decimals = 0, decPoint = '.', thousandsSep = ' '): string | number {
    function toFixedFix(num: number, prec: number): number {
      // Fix for IE parseFloat(0.55).toFixed(0) = 0;
      const ieFix = 10 ** prec;
      return Math.round(num * ieFix) / ieFix;
    }

    if (typeof number === 'number') {
      const num = !Number.isFinite(Number(number)) ? 0 : Number(number);
      const prec = !Number.isFinite(Number(decimals)) ? 0 : Math.abs(decimals);
      const sep = thousandsSep;
      const dec = decPoint;
      const numFormat = (prec ? toFixedFix(num, prec) : Math.round(num)).toString().split('.');
      if (numFormat[0].length > 3)
        numFormat[0] = numFormat[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);

      if ((numFormat[1] || '').length < prec) {
        numFormat[1] = numFormat[1] || '';
        numFormat[1] += new Array(prec - numFormat[1].length + 1).join('0');
      }
      return numFormat.join(dec);
    }
    return '-';
  },
  // Wildberries
  wbProductLink(nmid = 0): string {
    return `https://www.wildberries.ru/catalog/${nmid}/detail.aspx`;
  },
  /**
   * Картинка для товара WB
   * @param nmId - nmId товара
   * @param size - размер фото ['tm', 'big', 'c246x328', 'c516x688']
   * @param item - номер фото по порядку
   */
  // eslint-disable-next-line complexity
  wbImgSrc(nmId = 0, size = 'tm', item = 1): string {
    if (Number.isNaN(nmId) || Number.isNaN(item) || nmId <= 0 || item <= 0)
      return '';

    if (!['tm', 'big', 'c246x328', 'c516x688'].includes(size))
      return '';

    let wbUrl = '';
    const vol = Number(nmId.toString().slice(0, -5));

    if (vol >= 0 && vol <= 143)
      wbUrl = '01';
    else if (vol >= 144 && vol <= 287)
      wbUrl = '02';
    else if (vol >= 288 && vol <= 431)
      wbUrl = '03';
    else if (vol >= 432 && vol <= 719)
      wbUrl = '04';
    else if (vol >= 720 && vol <= 1007)
      wbUrl = '05';
    else if (vol >= 1008 && vol <= 1061)
      wbUrl = '06';
    else if (vol >= 1062 && vol <= 1115)
      wbUrl = '07';
    else if (vol >= 1116 && vol <= 1169)
      wbUrl = '08';
    else if (vol >= 1170 && vol <= 1313)
      wbUrl = '09';
    else if (vol >= 1314 && vol <= 1601)
      wbUrl = '10';
    else if (vol >= 1602 && vol <= 1655)
      wbUrl = '11';
    else if (vol >= 1656 && vol <= 1919)
      wbUrl = '12';
    else if (vol >= 1920 && vol <= 2045)
      wbUrl = '13';
    else if (vol >= 2046 && vol <= 2189)
      wbUrl = '14';
    else if (vol >= 2190 && vol <= 2405)
      wbUrl = '15';
    else
      wbUrl = '16';

    return `//basket-${wbUrl}.wbbasket.ru/vol${vol}/part${nmId.toString().slice(0, -3)}/${nmId}/images/${size}/${item}.webp`;
  },
};
