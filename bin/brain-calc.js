#!/usr/bin/env node
import calcFlow from '../src/games/calc-flow.js';

import { sayHi, sayBy } from '../src/index.js';

sayHi();

sayBy(calcFlow());
