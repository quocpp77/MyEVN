import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodicElement } from '../models/periodic-element';

export interface Sms {
  branch: string,
  phone: string,
  content: string,
  password: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: '20067', name: 'Phạm Phú Quốc', position: 'Test App', phone: '0963077677' },
  { id: '13823', name: 'Nguyễn Văn Giáp', position: 'Giám đốc công ty', phone: '0962500234' },
  { id: '11215', name: 'Ngô Văn Dũng', position: 'Phó Giám đốc công ty', phone: '0946386068' },
  { id: '12821', name: 'Trần Quốc Hùng', position: 'Phó Giám đốc công ty', phone: '0962500535' },
  { id: '13766', name: 'Trần Thanh Hải', position: 'Phó Giám đốc công ty', phone: '0962500221' },
  { id: '20347', name: 'Hà Thị Mai Hiên', position: 'Kế Toán trưởng', phone: '0916068799' },
  { id: 'P8883', name: 'Lê Minh Trưởng', position: 'TP.TC-NS Công ty', phone: '0963618769' },
  { id: '11214', name: 'Nguyễn Thanh Hải', position: 'Chánh văn phòng Công ty', phone: '0913948058' },
  { id: '11695', name: 'Hoàng Ngọc Thuần', position: 'TP.Điều Độ Công ty', phone: '0916500563' },
  { id: '22970', name: 'Lê Xuân Tuấn Tú', position: 'TP.Kinh Doanh Công ty', phone: '0963367879' },
  { id: '17706', name: 'Nguyễn Đức Minh', position: 'TP.An Toàn Công ty', phone: '0962500579' },
  { id: '16574', name: 'Nguyễn Văn Thuấn', position: 'TP.KT-TT-PC Công ty', phone: '0972757999' },
  { id: '11922', name: 'Phạm Thị Ngọc Diệp', position: 'TP.VT-CNTT Công ty', phone: '0962500509' },
  { id: '09257', name: 'Võ Khắc Thế Hùng', position: 'TP.KH-VT Công ty', phone: '0962500700' },
  { id: '16290', name: 'Nguyễn Văn Quyến', position: 'TP.QLĐT Công ty', phone: '0962500241' },
  { id: '16294', name: 'Phạm Ngọc Quế', position: 'GĐĐL.Vũng Tàu', phone: '0966528852' },
  { id: '17097', name: 'Nguyễn Xuân Quang', position: 'GĐĐL.Bà Rịa', phone: '0913637067' },
  { id: '13764', name: 'Vũ Hồng Tráng', position: 'GĐĐL.Phú Mỹ', phone: '0962500520' },
  { id: '18135', name: 'Nguyễn Tiến Dũng', position: 'GĐĐL.Long Điền', phone: '0963794111' },
  { id: '14254', name: 'Trần Bé', position: 'GĐĐL.Châu Đức', phone: '0962500536' },
  { id: '18594', name: 'Dương Đình Vượng', position: 'GĐĐL.Xuyên Mộc', phone: '0962500269' },
  { id: '14800', name: 'Nguyễn Thanh Sơn', position: 'GĐĐL.Đất Đỏ', phone: '0963469379' },
  { id: '33718', name: 'Đoàn Văn  Tranh', position: 'GĐĐL.Côn Đảo', phone: '0913129390' },
];

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  sendSms(sms: Sms) {
    return this.http.post(environment.apiURL + '/sms', sms);
  }

  getPeriodic() {
    return ELEMENT_DATA;
  }

}
