#!/usr/bin/env node
import progressionFlow from '../src/games/progression-flow.js';

import { sayHi, sayBy } from '../src/index.js';

sayHi();

sayBy(progressionFlow());
