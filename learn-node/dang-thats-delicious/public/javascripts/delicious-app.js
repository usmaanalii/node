import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autoComplete from './modules/autoComplete';
import typeAhead from './modules/typeAhead'

autoComplete( $('#address'), $('#lat'), $('#lng') );

typeAhead( $('.search') );