import axios from 'axios';
import { IImage } from '../interfaces/image';
import { IResponse } from '../interfaces/response';

const serverUrl = process.env.REACT_APP_SERVER_URL;
const images: string = 'images';

export function getImages(): Promise<any> {
  return axios.get<IResponse<IImage>>(
    `${serverUrl}/${images}`
  ).then((response) => response.data);
}
