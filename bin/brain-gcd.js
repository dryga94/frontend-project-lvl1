#!/usr/bin/env node
import gcdFlow from '../src/games/gcd-flow.js';

import { sayHi, sayBy } from '../src/index.js';

sayHi();

sayBy(gcdFlow());
