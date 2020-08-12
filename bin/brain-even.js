#!/usr/bin/env node
import gameFlow from '../src/games/game-flow.js';

import { sayHi, sayBy } from '../src/index.js';

sayHi();

sayBy(gameFlow());
