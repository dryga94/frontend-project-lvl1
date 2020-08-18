#!/usr/bin/env node
import primeFlow from '../src/games/prime-flow.js';

import { sayHi, sayBy } from '../src/index.js';

sayHi();

sayBy(primeFlow());
