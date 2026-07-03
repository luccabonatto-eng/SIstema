function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;

// ─── MOCK DATA ────────────────────────────────────────────────────────────────

var MOCK_USER = {
  name: 'João Silva',
  email: 'joao@opticom.com.br',
  role: 'ADMIN',
  company: {
    name: 'Opticom Telecom',
    plan: 'PROFESSIONAL'
  }
};
var MOCK_ALERTS = [{
  id: 1,
  severity: 'HIGH',
  title: 'Cliente inadimplente',
  message: 'Empresa ABC — R$ 2.500,00 vencido há 18 dias',
  type: 'OVERDUE_RECEIVABLE'
}, {
  id: 2,
  severity: 'HIGH',
  title: 'Bateria próxima do fim de vida',
  message: 'BAT-2026-000412: 430/500 ciclos (86%)',
  type: 'BATTERY_END_OF_LIFE'
}, {
  id: 3,
  severity: 'MEDIUM',
  title: 'Estoque crítico',
  message: '"Conector RJ45" — 5 un. (mín: 20)',
  type: 'LOW_STOCK'
}, {
  id: 4,
  severity: 'MEDIUM',
  title: 'OS em atraso',
  message: 'OS-2026-00089 não concluída, agendada 02/04',
  type: 'OVERDUE_ORDER'
}, {
  id: 5,
  severity: 'LOW',
  title: 'Contrato expirando',
  message: 'CTR-2025-042 expira em 28/04/2026',
  type: 'CONTRACT_EXPIRING'
}];
var OS_INIT = [{
  id: 1,
  number: 'OS-2026-00147',
  customer: 'Empresa ABC Ltda',
  type: 'Instalação',
  priority: 'HIGH',
  status: 'IN_PROGRESS',
  date: '2026-04-05',
  tech: 'Carlos Souza',
  substation: 'SE Empresa ABC — Sala de Energia',
  city: 'São José do Rio Preto',
  desc: 'Instalação de sistema de energia ininterrupta com 3 nobreaks e banco de baterias.'
}, {
  id: 2,
  number: 'OS-2026-00146',
  customer: 'Prefeitura Municipal',
  type: 'Manutenção',
  priority: 'URGENT',
  status: 'IN_TRANSIT',
  date: '2026-04-05',
  tech: 'Paulo Mendes',
  substation: 'SE Prefeitura — Bloco Administrativo',
  city: 'São José do Rio Preto',
  desc: 'Manutenção corretiva em sistema de backup — servidor de dados crítico.'
}, {
  id: 3,
  number: 'OS-2026-00145',
  customer: 'Hospital Regional',
  type: 'Revisão',
  priority: 'HIGH',
  status: 'SCHEDULED',
  date: '2026-04-05',
  tech: 'Carlos Souza',
  substation: 'SE Hospital — Bloco Cirúrgico',
  city: 'Catanduva',
  desc: 'Revisão anual do sistema de energia do bloco cirúrgico.'
}, {
  id: 4,
  number: 'OS-2026-00144',
  customer: 'TeleVoz S.A.',
  type: 'Instalação',
  priority: 'MEDIUM',
  status: 'OPEN',
  date: '2026-04-06',
  tech: null,
  substation: 'SE TeleVoz — Datacenter',
  city: 'Mirassol',
  desc: 'Instalação de nobreak 5KVA no datacenter interno.'
}, {
  id: 5,
  number: 'OS-2026-00143',
  customer: 'Banco Meridional',
  type: 'Emergência',
  priority: 'URGENT',
  status: 'OPEN',
  date: '2026-04-04',
  tech: null,
  substation: 'SE Banco — Sala de Servidores',
  city: 'São José do Rio Preto',
  desc: 'Falha total no sistema de backup — servidor bancário sem energia de emergência.'
}, {
  id: 6,
  number: 'OS-2026-00142',
  customer: 'Supermercado Central',
  type: 'Manutenção',
  priority: 'LOW',
  status: 'COMPLETED',
  date: '2026-04-04',
  tech: 'Rafael Lima',
  substation: 'SE Supermercado — CPD',
  city: 'Bady Bassitt',
  desc: 'Manutenção preventiva trimestral nos equipamentos de energia.'
}, {
  id: 7,
  number: 'OS-2026-00141',
  customer: 'Data Center Norte',
  type: 'Instalação',
  priority: 'MEDIUM',
  status: 'INVOICED',
  date: '2026-04-03',
  tech: 'Paulo Mendes',
  substation: 'SE DC Norte — Sala Elétrica A',
  city: 'São José do Rio Preto',
  desc: 'Instalação completa de sala de energia com 2 bancos de baterias.'
}, {
  id: 8,
  number: 'OS-2026-00140',
  customer: 'Clínica Saúde+',
  type: 'Revisão',
  priority: 'MEDIUM',
  status: 'COMPLETED',
  date: '2026-04-04',
  tech: 'Carlos Souza',
  substation: 'SE Clínica — Emergência',
  city: 'São José do Rio Preto',
  desc: 'Revisão semestral de todos os sistemas de emergência da clínica.'
}, {
  id: 9,
  number: 'OS-2026-00139',
  customer: 'Escritório Flex',
  type: 'Instalação',
  priority: 'LOW',
  status: 'OPEN',
  date: '2026-04-07',
  tech: null,
  substation: 'SE Escritório Flex — Andar 3',
  city: 'Votuporanga',
  desc: 'Instalação de nobreak básico para estações de trabalho.'
}, {
  id: 10,
  number: 'OS-2026-00138',
  customer: 'Telecom Norte',
  type: 'Emergência',
  priority: 'HIGH',
  status: 'SCHEDULED',
  date: '2026-04-05',
  tech: 'Rafael Lima',
  substation: 'SE Telecom Norte — Torre Principal',
  city: 'Catanduva',
  desc: 'Falha no inversor principal — equipamento de telecomunicação em risco.'
}];
var CUSTOMERS_INIT = [{
  id: 1,
  type: 'PJ',
  name: 'Empresa ABC Ltda',
  doc: '12.345.678/0001-90',
  city: 'S.J. Rio Preto',
  contracts: 2,
  openOS: 3,
  revenue: 15000000,
  active: true,
  phone: '(17) 3333-0001',
  email: 'financeiro@abc.com.br'
}, {
  id: 2,
  type: 'PJ',
  name: 'Prefeitura Municipal',
  doc: '18.123.456/0001-72',
  city: 'S.J. Rio Preto',
  contracts: 1,
  openOS: 1,
  revenue: 8500000,
  active: true,
  phone: '(17) 3222-9000',
  email: 'compras@prefeitura.sp.gov.br'
}, {
  id: 3,
  type: 'PJ',
  name: 'Hospital Regional',
  doc: '33.456.789/0001-11',
  city: 'Catanduva',
  contracts: 3,
  openOS: 1,
  revenue: 22000000,
  active: true,
  phone: '(17) 3524-5000',
  email: 'ti@hospitalregional.com.br'
}, {
  id: 4,
  type: 'PJ',
  name: 'TeleVoz S.A.',
  doc: '45.678.901/0001-22',
  city: 'Mirassol',
  contracts: 1,
  openOS: 1,
  revenue: 6000000,
  active: true,
  phone: '(17) 3242-7700',
  email: 'rede@televoz.com.br'
}, {
  id: 5,
  type: 'PJ',
  name: 'Banco Meridional',
  doc: '56.789.012/0001-33',
  city: 'S.J. Rio Preto',
  contracts: 2,
  openOS: 1,
  revenue: 18000000,
  active: true,
  phone: '(17) 3211-5500',
  email: 'infra@meridional.com.br'
}, {
  id: 6,
  type: 'PF',
  name: 'Roberto Marcelino',
  doc: '123.456.789-00',
  city: 'Votuporanga',
  contracts: 1,
  openOS: 0,
  revenue: 1200000,
  active: true,
  phone: '(17) 99812-3456',
  email: 'roberto.marcelino@gmail.com'
}, {
  id: 7,
  type: 'PJ',
  name: 'Data Center Norte',
  doc: '67.890.123/0001-44',
  city: 'S.J. Rio Preto',
  contracts: 2,
  openOS: 0,
  revenue: 12000000,
  active: true,
  phone: '(17) 3399-0088',
  email: 'ops@dcenternorte.com.br'
}, {
  id: 8,
  type: 'PJ',
  name: 'Supermercado Central',
  doc: '78.901.234/0001-55',
  city: 'Bady Bassitt',
  contracts: 1,
  openOS: 0,
  revenue: 3500000,
  active: false,
  phone: '(17) 3278-4411',
  email: 'ti@supermercadocentral.com.br'
}];
var CONTRACTS_INIT = [{
  id: 1,
  number: 'CTR-2026-001',
  customer: 'Empresa ABC Ltda',
  type: 'MONTHLY',
  value: 500000,
  start: '2026-01-01',
  end: '2026-12-31',
  status: 'ACTIVE',
  sla: 24
}, {
  id: 2,
  number: 'CTR-2026-002',
  customer: 'Hospital Regional',
  type: 'ANNUAL',
  value: 850000,
  start: '2026-01-01',
  end: '2026-12-31',
  status: 'ACTIVE',
  sla: 8
}, {
  id: 3,
  number: 'CTR-2026-003',
  customer: 'Banco Meridional',
  type: 'MONTHLY',
  value: 900000,
  start: '2026-02-01',
  end: '2027-01-31',
  status: 'ACTIVE',
  sla: 4
}, {
  id: 4,
  number: 'CTR-2025-042',
  customer: 'Data Center Norte',
  type: 'ANNUAL',
  value: 1200000,
  start: '2025-05-01',
  end: '2026-04-28',
  status: 'ACTIVE',
  sla: 12
}, {
  id: 5,
  number: 'CTR-2026-004',
  customer: 'TeleVoz S.A.',
  type: 'QUARTERLY',
  value: 400000,
  start: '2026-01-01',
  end: '2026-09-30',
  status: 'ACTIVE',
  sla: 48
}, {
  id: 6,
  number: 'CTR-2025-018',
  customer: 'Supermercado Central',
  type: 'MONTHLY',
  value: 250000,
  start: '2025-03-01',
  end: '2026-02-28',
  status: 'EXPIRED',
  sla: 48
}];
var TRANSACTIONS_INIT = [{
  id: 1,
  type: 'INCOME',
  status: 'RECEIVED',
  desc: 'Fatura CTR-2026-001 — Empresa ABC — Abr/2026',
  amount: 500000,
  due: '2026-04-10',
  cat: 'Receita de Contratos',
  account: 'Bradesco',
  payMethod: 'PIX'
}, {
  id: 2,
  type: 'INCOME',
  status: 'PENDING',
  desc: 'Fatura CTR-2026-002 — Hospital Regional — Abr/2026',
  amount: 850000,
  due: '2026-04-15',
  cat: 'Receita de Contratos',
  account: 'Bradesco',
  payMethod: 'Boleto Bancário'
}, {
  id: 3,
  type: 'EXPENSE',
  status: 'PAID',
  desc: 'Compra de baterias — Fornecedor Heliar',
  amount: 1250000,
  due: '2026-04-05',
  cat: 'Material',
  account: 'Itaú',
  payMethod: 'TED / DOC'
}, {
  id: 4,
  type: 'EXPENSE',
  status: 'PENDING',
  desc: 'Aluguel escritório — Abril/2026',
  amount: 350000,
  due: '2026-04-05',
  cat: 'Administrativo',
  account: 'Bradesco',
  payMethod: 'TED / DOC'
}, {
  id: 5,
  type: 'EXPENSE',
  status: 'OVERDUE',
  desc: 'Combustível — Frota — Mar/2026',
  amount: 185400,
  due: '2026-03-30',
  cat: 'Combustível',
  account: 'Itaú',
  payMethod: 'Cartão de Crédito'
}, {
  id: 6,
  type: 'INCOME',
  status: 'PENDING',
  desc: 'OS-2026-00141 — Data Center Norte',
  amount: 320000,
  due: '2026-04-20',
  cat: 'Receita de OS',
  account: 'Bradesco',
  payMethod: 'PIX'
}, {
  id: 7,
  type: 'EXPENSE',
  status: 'PAID',
  desc: 'Folha de pagamento — Março/2026',
  amount: 3200000,
  due: '2026-04-05',
  cat: 'Pessoal',
  account: 'Bradesco',
  payMethod: 'TED / DOC'
}, {
  id: 8,
  type: 'INCOME',
  status: 'OVERDUE',
  desc: 'Fatura CTR-2025-032 — Banco Meridional — Mar/2026',
  amount: 900000,
  due: '2026-03-15',
  cat: 'Receita de Contratos',
  account: 'Itaú',
  payMethod: 'Boleto Bancário'
}];
var PRODUCTS_INIT = [{
  id: 1,
  code: 'PROD-001',
  name: 'Bateria 12V 200Ah',
  cat: 'Baterias',
  unit: 'un',
  costRef: 85000,
  desc: 'Bateria selada VRLA, tecnologia AGM, ciclo profundo 500+'
}, {
  id: 2,
  code: 'PROD-002',
  name: 'Nobreak 3KVA Senoidal',
  cat: 'Equipamentos',
  unit: 'un',
  costRef: 250000,
  desc: 'Nobreak on-line com saída senoidal pura, entrada bivolt'
}, {
  id: 3,
  code: 'PROD-003',
  name: 'Inversor 12V/220V 1.5kW',
  cat: 'Equipamentos',
  unit: 'un',
  costRef: 120000,
  desc: 'Inversor de onda modificada, protção contra sobrecarga'
}, {
  id: 4,
  code: 'PROD-004',
  name: 'Conector RJ45 Cat6',
  cat: 'Conectores',
  unit: 'cx',
  costRef: 150,
  desc: 'Caixa com 100 conectores para cabo cat6, blindado'
}, {
  id: 5,
  code: 'PROD-005',
  name: 'Cabo de Rede 5m',
  cat: 'Cabos',
  unit: 'un',
  costRef: 1200,
  desc: 'Cabo UTP Cat6 com conectores já fixados, 5 metros'
}, {
  id: 6,
  code: 'PROD-006',
  name: 'Fusível 20A',
  cat: 'Elétrico',
  unit: 'un',
  costRef: 80,
  desc: 'Fusível de cerâmica 20A para painéis elétricos'
}];
var INVENTORY_INIT = [{
  id: 1,
  sku: 'BAT-12V-200AH',
  name: 'Bateria 12V 200Ah',
  cat: 'Baterias',
  qty: 8,
  min: 10,
  cost: 85000,
  loc: 'Almox. A — Prat. 3',
  belowMin: true
}, {
  id: 2,
  sku: 'CON-RJ45-CAT6',
  name: 'Conector RJ45 Cat6',
  cat: 'Conectores',
  qty: 5,
  min: 20,
  cost: 150,
  loc: 'Almox. B — Gav. 5',
  belowMin: true
}, {
  id: 3,
  sku: 'CAB-REDE-5M',
  name: 'Cabo de Rede 5m',
  cat: 'Cabos',
  qty: 45,
  min: 20,
  cost: 1200,
  loc: 'Almox. B — Prat. 1',
  belowMin: false
}, {
  id: 4,
  sku: 'NOB-3KVA',
  name: 'Nobreak 3KVA',
  cat: 'Equipamentos',
  qty: 3,
  min: 2,
  cost: 250000,
  loc: 'Almox. A — Prat. 1',
  belowMin: false
}, {
  id: 5,
  sku: 'INV-12-220',
  name: 'Inversor 12V/220V 1.5kW',
  cat: 'Equipamentos',
  qty: 6,
  min: 3,
  cost: 120000,
  loc: 'Almox. A — Prat. 2',
  belowMin: false
}, {
  id: 6,
  sku: 'FUS-20A',
  name: 'Fusível 20A',
  cat: 'Elétrico',
  qty: 150,
  min: 50,
  cost: 80,
  loc: 'Almox. C — Gav. 2',
  belowMin: false
}];
var TECHNICIANS_INIT = [{
  id: 1,
  name: 'Carlos Souza',
  phone: '(17) 98888-0000',
  email: 'carlos@opticom.com.br',
  specs: ['Instalação', 'Manutenção Bateria'],
  status: 'ACTIVE',
  orders: 28,
  avgMin: 95,
  rework: 3.5
}, {
  id: 2,
  name: 'Paulo Mendes',
  phone: '(17) 97777-1111',
  email: 'paulo@opticom.com.br',
  specs: ['Instalação', 'Emergência'],
  status: 'ACTIVE',
  orders: 22,
  avgMin: 110,
  rework: 2.1
}, {
  id: 3,
  name: 'Rafael Lima',
  phone: '(17) 96666-2222',
  email: 'rafael@opticom.com.br',
  specs: ['Manutenção Preventiva', 'Revisão'],
  status: 'ACTIVE',
  orders: 19,
  avgMin: 85,
  rework: 1.8
}, {
  id: 4,
  name: 'Marcos Costa',
  phone: '(17) 95555-3333',
  email: 'marcos@opticom.com.br',
  specs: ['Instalação'],
  status: 'ON_LEAVE',
  orders: 0,
  avgMin: 0,
  rework: 0
}];
var VEHICLES_INIT = [{
  id: 1,
  plate: 'ABC-1D23',
  model: 'Fiat Fiorino',
  year: 2022,
  tech: 'Carlos Souza',
  status: 'IN_USE',
  odometer: 87500,
  lastService: '2026-02-15',
  nextService: '2026-08-15',
  maintenance: [{
    id: 1,
    date: '2026-02-15',
    type: 'Preventiva',
    desc: 'Troca de óleo e filtros',
    km: 87000,
    cost: 35000,
    tech: 'Carlos Souza'
  }, {
    id: 2,
    date: '2025-08-10',
    type: 'Corretiva',
    desc: 'Troca de pastilhas de freio',
    km: 80000,
    cost: 28000,
    tech: 'Rafael Lima'
  }]
}, {
  id: 2,
  plate: 'DEF-2E45',
  model: 'VW Saveiro',
  year: 2021,
  tech: 'Paulo Mendes',
  status: 'IN_USE',
  odometer: 112300,
  lastService: '2026-01-10',
  nextService: '2026-07-10',
  maintenance: [{
    id: 1,
    date: '2026-01-10',
    type: 'Preventiva',
    desc: 'Revisão geral e troca de óleo',
    km: 111000,
    cost: 42000,
    tech: 'Paulo Mendes'
  }]
}, {
  id: 3,
  plate: 'GHI-3F67',
  model: 'Renault Kangoo',
  year: 2023,
  tech: null,
  status: 'AVAILABLE',
  odometer: 34200,
  lastService: '2026-03-01',
  nextService: '2026-09-01',
  maintenance: []
}, {
  id: 4,
  plate: 'JKL-4G89',
  model: 'Fiat Fiorino',
  year: 2020,
  tech: null,
  status: 'MAINTENANCE',
  odometer: 145000,
  lastService: '2026-04-01',
  nextService: '2026-04-20',
  maintenance: [{
    id: 1,
    date: '2026-04-01',
    type: 'Corretiva',
    desc: 'Reparo na suspensão dianteira',
    km: 144500,
    cost: 85000,
    tech: 'Carlos Souza'
  }]
}];
var MOCK_PIPELINE = {
  realizadas: [{
    number: 'OS-2026-00142',
    customer: 'Supermercado Central',
    type: 'Manutenção',
    value: 280000,
    date: '04/04/2026',
    tech: 'Rafael Lima'
  }, {
    number: 'OS-2026-00140',
    customer: 'Clínica Saúde+',
    type: 'Revisão',
    value: 195000,
    date: '04/04/2026',
    tech: 'Carlos Souza'
  }, {
    number: 'OS-2026-00138',
    customer: 'Telecom Norte',
    type: 'Emergência',
    value: 540000,
    date: '05/04/2026',
    tech: 'Rafael Lima'
  }, {
    number: 'OS-2026-00136',
    customer: 'Empresa ABC Ltda',
    type: 'Instalação',
    value: 820000,
    date: '02/04/2026',
    tech: 'Paulo Mendes'
  }, {
    number: 'OS-2026-00135',
    customer: 'Banco Meridional',
    type: 'Revisão',
    value: 310000,
    date: '01/04/2026',
    tech: 'Carlos Souza'
  }],
  enviadas: [{
    number: 'OS-2026-00142',
    customer: 'Supermercado Central',
    type: 'Manutenção',
    value: 280000,
    date: '05/04/2026',
    tech: 'Rafael Lima'
  }, {
    number: 'OS-2026-00140',
    customer: 'Clínica Saúde+',
    type: 'Revisão',
    value: 195000,
    date: '05/04/2026',
    tech: 'Carlos Souza'
  }, {
    number: 'OS-2026-00138',
    customer: 'Telecom Norte',
    type: 'Emergência',
    value: 540000,
    date: '05/04/2026',
    tech: 'Rafael Lima'
  }, {
    number: 'OS-2026-00136',
    customer: 'Empresa ABC Ltda',
    type: 'Instalação',
    value: 820000,
    date: '03/04/2026',
    tech: 'Paulo Mendes'
  }, {
    number: 'OS-2026-00135',
    customer: 'Banco Meridional',
    type: 'Revisão',
    value: 310000,
    date: '03/04/2026',
    tech: 'Carlos Souza'
  }, {
    number: 'OS-2026-00131',
    customer: 'Hospital Regional',
    type: 'Manutenção',
    value: 450000,
    date: '02/04/2026',
    tech: 'Paulo Mendes'
  }, {
    number: 'OS-2026-00129',
    customer: 'Data Center Norte',
    type: 'Instalação',
    value: 990000,
    date: '01/04/2026',
    tech: 'Carlos Souza'
  }, {
    number: 'OS-2026-00127',
    customer: 'TeleVoz S.A.',
    type: 'Revisão',
    value: 260000,
    date: '01/04/2026',
    tech: 'Rafael Lima'
  }],
  aprovadas: [{
    number: 'OS-2026-00136',
    customer: 'Empresa ABC Ltda',
    type: 'Instalação',
    value: 820000,
    date: '04/04/2026',
    tech: 'Paulo Mendes'
  }, {
    number: 'OS-2026-00135',
    customer: 'Banco Meridional',
    type: 'Revisão',
    value: 310000,
    date: '04/04/2026',
    tech: 'Carlos Souza'
  }, {
    number: 'OS-2026-00131',
    customer: 'Hospital Regional',
    type: 'Manutenção',
    value: 450000,
    date: '03/04/2026',
    tech: 'Paulo Mendes'
  }, {
    number: 'OS-2026-00129',
    customer: 'Data Center Norte',
    type: 'Instalação',
    value: 990000,
    date: '03/04/2026',
    tech: 'Carlos Souza'
  }, {
    number: 'OS-2026-00127',
    customer: 'TeleVoz S.A.',
    type: 'Revisão',
    value: 260000,
    date: '02/04/2026',
    tech: 'Rafael Lima'
  }, {
    number: 'OS-2026-00124',
    customer: 'Prefeitura Municipal',
    type: 'Manutenção',
    value: 680000,
    date: '01/04/2026',
    tech: 'Paulo Mendes'
  }],
  nf: [{
    number: 'OS-2026-00136',
    customer: 'Empresa ABC Ltda',
    type: 'Instalação',
    value: 820000,
    date: '05/04/2026',
    nf: 'NF-e 001542'
  }, {
    number: 'OS-2026-00131',
    customer: 'Hospital Regional',
    type: 'Manutenção',
    value: 450000,
    date: '05/04/2026',
    nf: 'NF-e 001543'
  }, {
    number: 'OS-2026-00129',
    customer: 'Data Center Norte',
    type: 'Instalação',
    value: 990000,
    date: '04/04/2026',
    nf: 'NF-e 001541'
  }, {
    number: 'OS-2026-00127',
    customer: 'TeleVoz S.A.',
    type: 'Revisão',
    value: 260000,
    date: '04/04/2026',
    nf: 'NF-e 001540'
  }, {
    number: 'OS-2026-00124',
    customer: 'Prefeitura Municipal',
    type: 'Manutenção',
    value: 680000,
    date: '03/04/2026',
    nf: 'NF-e 001538'
  }],
  pagas: [{
    number: 'OS-2026-00129',
    customer: 'Data Center Norte',
    type: 'Instalação',
    value: 990000,
    date: '06/04/2026',
    nf: 'NF-e 001541'
  }, {
    number: 'OS-2026-00124',
    customer: 'Prefeitura Municipal',
    type: 'Manutenção',
    value: 680000,
    date: '06/04/2026',
    nf: 'NF-e 001538'
  }, {
    number: 'OS-2026-00120',
    customer: 'Banco Meridional',
    type: 'Revisão',
    value: 310000,
    date: '05/04/2026',
    nf: 'NF-e 001535'
  }]
};
var AUDIT_LOG = [{
  id: 1,
  user: 'João Silva',
  action: 'Criou OS',
  module: 'OS',
  detail: 'OS-2026-00147 — Empresa ABC Ltda',
  time: '04/04/2026 14:32'
}, {
  id: 2,
  user: 'Carlos Souza',
  action: 'Iniciou atendimento',
  module: 'OS',
  detail: 'OS-2026-00146 — Prefeitura Municipal',
  time: '04/04/2026 09:15'
}, {
  id: 3,
  user: 'João Silva',
  action: 'Registrou pagamento',
  module: 'Financeiro',
  detail: 'CTR-2026-001 — R$ 5.000,00',
  time: '04/04/2026 08:50'
}, {
  id: 4,
  user: 'João Silva',
  action: 'Criou contrato',
  module: 'Contratos',
  detail: 'CTR-2026-003 — Banco Meridional',
  time: '03/04/2026 16:20'
}, {
  id: 5,
  user: 'Paulo Mendes',
  action: 'Concluiu OS',
  module: 'OS',
  detail: 'OS-2026-00142 — Supermercado Central',
  time: '03/04/2026 15:05'
}, {
  id: 6,
  user: 'João Silva',
  action: 'Ajuste de estoque',
  module: 'Estoque',
  detail: 'BAT-12V-200AH — +5 unidades',
  time: '03/04/2026 11:30'
}, {
  id: 7,
  user: 'Rafael Lima',
  action: 'Concluiu OS',
  module: 'OS',
  detail: 'OS-2026-00140 — Clínica Saúde+',
  time: '03/04/2026 10:45'
}, {
  id: 8,
  user: 'João Silva',
  action: 'Criou cliente',
  module: 'Clientes',
  detail: 'TeleVoz S.A.',
  time: '02/04/2026 17:00'
}, {
  id: 9,
  user: 'João Silva',
  action: 'Alterou status OS',
  module: 'OS',
  detail: 'OS-2026-00141 → Faturada',
  time: '02/04/2026 14:15'
}, {
  id: 10,
  user: 'João Silva',
  action: 'Login no sistema',
  module: 'Sistema',
  detail: 'IP 189.120.45.12 — Chrome 123',
  time: '02/04/2026 08:00'
}, {
  id: 11,
  user: 'Carlos Souza',
  action: 'Login no sistema',
  module: 'Sistema',
  detail: 'IP 177.88.32.7 — Chrome 123',
  time: '02/04/2026 07:45'
}, {
  id: 12,
  user: 'João Silva',
  action: 'Exportou relatório',
  module: 'Financeiro',
  detail: 'DRE Gerencial — Jan-Mar 2026',
  time: '01/04/2026 16:30'
}];
var SYSTEM_USERS_INIT = [{
  id: 1,
  name: 'João Silva',
  email: 'joao@opticom.com.br',
  role: 'ADMIN',
  status: 'ACTIVE',
  lastLogin: '04/04/2026'
}, {
  id: 2,
  name: 'Ana Oliveira',
  email: 'ana@opticom.com.br',
  role: 'MANAGER',
  status: 'ACTIVE',
  lastLogin: '02/04/2026'
}, {
  id: 3,
  name: 'Carlos Souza',
  email: 'carlos@opticom.com.br',
  role: 'TECHNICIAN',
  status: 'ACTIVE',
  lastLogin: '04/04/2026'
}, {
  id: 4,
  name: 'Paulo Mendes',
  email: 'paulo@opticom.com.br',
  role: 'TECHNICIAN',
  status: 'ACTIVE',
  lastLogin: '03/04/2026'
}, {
  id: 5,
  name: 'Rafael Lima',
  email: 'rafael@opticom.com.br',
  role: 'TECHNICIAN',
  status: 'ACTIVE',
  lastLogin: '03/04/2026'
}];

// ─── UTILS ────────────────────────────────────────────────────────────────────

var fmt = function fmt(c) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(c / 100);
};
var fmtDate = function fmtDate(d) {
  return d ? new Date(d + 'T12:00:00').toLocaleDateString('pt-BR') : '—';
};

// ─── ICONS ────────────────────────────────────────────────────────────────────

var ICON_PATHS = {
  dashboard: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  orders: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  customers: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  contracts: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  financial: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  inventory: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  technicians: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  fleet: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0H3m8 0h2',
  settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
  audit: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  bell: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  logout: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  plus: 'M12 4v16m8-8H4',
  calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  chevLeft: 'M15 19l-7-7 7-7',
  check: 'M5 13l4 4L19 7',
  phone: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  edit: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  trash: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
  eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  close: 'M6 18L18 6M6 6l12 12',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  download: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
};
var Icon = function Icon(_ref) {
  var name = _ref.name,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? 'w-5 h-5' : _ref$className;
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: ICON_PATHS[name] || ''
  }));
};

// ─── BADGES ───────────────────────────────────────────────────────────────────

var STATUS_MAP = {
  OPEN: ['bg-gray-100 text-gray-700', 'Aberta'],
  SCHEDULED: ['bg-blue-100 text-blue-700', 'Agendada'],
  IN_TRANSIT: ['bg-sky-100 text-sky-700', 'Em Trânsito'],
  IN_PROGRESS: ['bg-orange-100 text-orange-700', 'Em Andamento'],
  COMPLETED: ['bg-green-100 text-green-700', 'Concluída'],
  INVOICED: ['bg-purple-100 text-purple-700', 'Faturada'],
  CANCELLED: ['bg-red-100 text-red-700', 'Cancelada'],
  PENDING: ['bg-amber-100 text-amber-700', 'Pendente'],
  PAID: ['bg-green-100 text-green-700', 'Pago'],
  RECEIVED: ['bg-green-100 text-green-700', 'Recebido'],
  OVERDUE: ['bg-red-100 text-red-700', 'Vencido'],
  ACTIVE: ['bg-green-100 text-green-700', 'Ativo'],
  EXPIRED: ['bg-gray-100 text-gray-500', 'Expirado'],
  SUSPENDED: ['bg-yellow-100 text-yellow-700', 'Suspenso'],
  ON_LEAVE: ['bg-amber-100 text-amber-700', 'Afastado'],
  INACTIVE: ['bg-gray-100 text-gray-400', 'Inativo'],
  NEW: ['bg-blue-100 text-blue-700', 'Novo'],
  IN_USE: ['bg-green-100 text-green-700', 'Em Uso'],
  MAINTENANCE: ['bg-yellow-100 text-yellow-700', 'Manutenção'],
  DECOMMISSIONED: ['bg-red-100 text-red-600', 'Desativada'],
  AVAILABLE: ['bg-green-100 text-green-700', 'Disponível'],
  ADMIN: ['bg-purple-100 text-purple-700', 'Admin'],
  MANAGER: ['bg-blue-100 text-blue-700', 'Gerente'],
  TECHNICIAN: ['bg-gray-100 text-gray-700', 'Técnico']
};
var Badge = function Badge(_ref2) {
  var status = _ref2.status;
  var _ref3 = STATUS_MAP[status] || ['bg-gray-100 text-gray-600', status],
    _ref4 = _slicedToArray(_ref3, 2),
    cls = _ref4[0],
    label = _ref4[1];
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ".concat(cls)
  }, label);
};
var PRIORITY_MAP = {
  LOW: ['border border-gray-300 text-gray-500', 'Baixa'],
  MEDIUM: ['border border-blue-300 text-blue-600', 'Média'],
  HIGH: ['border border-orange-400 text-orange-600', 'Alta'],
  URGENT: ['border border-red-500 text-red-600 bg-red-50', 'Urgente']
};
var PriorityBadge = function PriorityBadge(_ref5) {
  var p = _ref5.p;
  var _ref6 = PRIORITY_MAP[p] || ['text-gray-500', '—'],
    _ref7 = _slicedToArray(_ref6, 2),
    cls = _ref7[0],
    label = _ref7[1];
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ".concat(cls)
  }, label);
};
var PRIORITY_BORDER = {
  LOW: 'border-l-gray-300',
  MEDIUM: 'border-l-blue-400',
  HIGH: 'border-l-orange-500',
  URGENT: 'border-l-red-600'
};

// ─── UI COMPONENTS ────────────────────────────────────────────────────────────

var KPI = function KPI(_ref8) {
  var title = _ref8.title,
    value = _ref8.value,
    sub = _ref8.sub,
    icon = _ref8.icon,
    _ref8$color = _ref8.color,
    color = _ref8$color === void 0 ? 'blue' : _ref8$color,
    trend = _ref8.trend,
    trendLabel = _ref8.trendLabel;
  var C = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    red: 'bg-red-50 text-red-600',
    orange: 'bg-orange-50 text-orange-600',
    purple: 'bg-purple-50 text-purple-600'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-medium text-gray-500 uppercase tracking-wide"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold text-gray-900 mt-1"
  }, value), sub && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, sub), trend !== undefined && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 mt-1.5 text-xs font-medium ".concat(trend >= 0 ? 'text-green-600' : 'text-red-500')
  }, /*#__PURE__*/React.createElement("span", null, trend >= 0 ? '▲' : '▼'), Math.abs(trend), "% ", trendLabel)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(C[color], " p-3 rounded-xl shrink-0")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    className: "w-6 h-6"
  }))));
};
var Gauge = function Gauge(_ref9) {
  var score = _ref9.score;
  var cx = 100,
    cy = 90,
    r = 65;
  var color = score >= 80 ? '#10b981' : score >= 60 ? '#3b82f6' : score >= 40 ? '#f59e0b' : '#ef4444';
  var label = score >= 80 ? 'EXCELENTE' : score >= 60 ? 'BOM' : score >= 40 ? 'ATENÇÃO' : 'CRÍTICO';
  var t = score / 100,
    rad = (1 - t) * Math.PI;
  var sx = (cx + r * Math.cos(rad)).toFixed(2),
    sy = (cy - r * Math.sin(rad)).toFixed(2);
  var bg = "M ".concat(cx - r, " ").concat(cy, " A ").concat(r, " ").concat(r, " 0 0 1 ").concat(cx + r, " ").concat(cy);
  var sc = score > 0 ? "M ".concat(cx - r, " ").concat(cy, " A ").concat(r, " ").concat(r, " 0 0 1 ").concat(sx, " ").concat(sy) : '';
  var nx = cx + (r - 14) * Math.cos(rad),
    ny = cy - (r - 14) * Math.sin(rad);
  return /*#__PURE__*/React.createElement("svg", {
    width: "200",
    height: "110",
    viewBox: "0 0 200 110"
  }, /*#__PURE__*/React.createElement("path", {
    d: bg,
    fill: "none",
    stroke: "#e5e7eb",
    strokeWidth: "14",
    strokeLinecap: "round"
  }), sc && /*#__PURE__*/React.createElement("path", {
    d: sc,
    fill: "none",
    stroke: color,
    strokeWidth: "14",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: cy,
    x2: nx.toFixed(1),
    y2: ny.toFixed(1),
    stroke: "#374151",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "4",
    fill: "#374151"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy - 22,
    textAnchor: "middle",
    fill: color,
    fontSize: "26",
    fontWeight: "bold",
    fontFamily: "sans-serif"
  }, score), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 16,
    textAnchor: "middle",
    fill: "#9ca3af",
    fontSize: "10",
    fontFamily: "sans-serif"
  }, label), /*#__PURE__*/React.createElement("text", {
    x: cx - r + 2,
    y: cy + 18,
    fill: "#d1d5db",
    fontSize: "9",
    fontFamily: "sans-serif"
  }, "0"), /*#__PURE__*/React.createElement("text", {
    x: cx + r - 10,
    y: cy + 18,
    fill: "#d1d5db",
    fontSize: "9",
    fontFamily: "sans-serif"
  }, "100"));
};
var LineChart = function LineChart(_ref0) {
  var data = _ref0.data,
    _ref0$color = _ref0.color,
    color = _ref0$color === void 0 ? '#3b82f6' : _ref0$color,
    _ref0$height = _ref0.height,
    height = _ref0$height === void 0 ? 140 : _ref0$height;
  var W = 300,
    H = height - 10,
    vals = data.map(function (d) {
      return d.v;
    }),
    mn = Math.min.apply(Math, _toConsumableArray(vals)),
    mx = Math.max.apply(Math, _toConsumableArray(vals)),
    rng = mx - mn || 1;
  var pts = data.map(function (d, i) {
    return [i / (data.length - 1) * W, H - (d.v - mn) / rng * H];
  });
  var pl = pts.map(function (p) {
      return p.join(',');
    }).join(' '),
    area = "0,".concat(H, " ").concat(pl, " ").concat(W, ",").concat(H);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H + 2),
    style: {
      width: '100%',
      height: height
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "g".concat(color.replace('#', '')),
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.15"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: "url(#g".concat(color.replace('#', ''), ")")
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pl,
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinejoin: "round"
  }), pts.map(function (_ref1, i) {
    var _ref10 = _slicedToArray(_ref1, 2),
      x = _ref10[0],
      y = _ref10[1];
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: x,
      cy: y,
      r: "3.5",
      fill: color
    });
  }));
};
var Modal = function Modal(_ref11) {
  var open = _ref11.open,
    onClose = _ref11.onClose,
    title = _ref11.title,
    _ref11$size = _ref11.size,
    size = _ref11$size === void 0 ? 'md' : _ref11$size,
    _ref11$locked = _ref11.locked,
    locked = _ref11$locked === void 0 ? false : _ref11$locked,
    children = _ref11.children;
  if (!open) return null;
  var widths = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };
  var handleBackdrop = locked ? undefined : onClose;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
    onClick: handleBackdrop
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-2xl ".concat(widths[size], " w-full mx-4 max-h-[88vh] flex flex-col"),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-base font-semibold text-gray-800"
  }, title), !locked && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 text-xl leading-none"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-y-auto flex-1 p-6"
  }, children)));
};
var Toast = function Toast(_ref12) {
  var msg = _ref12.msg,
    _ref12$type = _ref12.type,
    type = _ref12$type === void 0 ? 'success' : _ref12$type,
    onClose = _ref12.onClose;
  useEffect(function () {
    var t = setTimeout(onClose, 3200);
    return function () {
      return clearTimeout(t);
    };
  }, []);
  var colors = {
    success: 'bg-gray-900 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white'
  };
  var icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-5 right-5 z-[100] ".concat(colors[type] || colors.success, " text-sm px-4 py-3 rounded-xl shadow-xl flex items-center gap-3")
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-green-400"
  }, icons[type] || '✓'), " ", msg, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "text-gray-400 hover:text-white ml-1"
  }, "\xD7"));
};
var LabelField = function LabelField(_ref13) {
  var label = _ref13.label,
    value = _ref13.value;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mb-0.5"
  }, label), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-gray-800"
  }, value || '—'));
};

// FormField com validação integrada
var FormField = function FormField(_ref14) {
  var label = _ref14.label,
    value = _ref14.value,
    onChange = _ref14.onChange,
    error = _ref14.error,
    _ref14$type = _ref14.type,
    type = _ref14$type === void 0 ? 'text' : _ref14$type,
    _ref14$placeholder = _ref14.placeholder,
    placeholder = _ref14$placeholder === void 0 ? '' : _ref14$placeholder,
    _ref14$required = _ref14.required,
    required = _ref14$required === void 0 ? false : _ref14$required,
    _ref14$disabled = _ref14.disabled,
    disabled = _ref14$disabled === void 0 ? false : _ref14$disabled,
    _ref14$validator = _ref14.validator,
    validator = _ref14$validator === void 0 ? null : _ref14$validator,
    _ref14$onBlur = _ref14.onBlur,
    onBlur = _ref14$onBlur === void 0 ? null : _ref14$onBlur;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    touched = _useState2[0],
    setTouched = _useState2[1];
  var _useState3 = useState(error || ''),
    _useState4 = _slicedToArray(_useState3, 2),
    fieldError = _useState4[0],
    setFieldError = _useState4[1];
  var handleChange = function handleChange(e) {
    var newValue = e.target.value;
    onChange(newValue);
    if (touched && validator) {
      var result = validator(newValue);
      setFieldError(result.error);
    }
  };
  var handleBlur = function handleBlur() {
    setTouched(true);
    if (validator) {
      var result = validator(value);
      setFieldError(result.error);
    }
    if (onBlur) onBlur();
  };
  var showError = touched && fieldError;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1.5"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "text-red-500 ml-1"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: handleChange,
    onBlur: handleBlur,
    placeholder: placeholder,
    disabled: disabled,
    className: "w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors ".concat(showError ? 'border-red-300 focus:ring-red-500 bg-red-50' : 'border-gray-300 focus:ring-blue-500 focus:border-transparent', " ").concat(disabled ? 'bg-gray-100 cursor-not-allowed' : '')
  }), showError && /*#__PURE__*/React.createElement("p", {
    className: "text-red-500 text-xs mt-1"
  }, fieldError));
};

// ─── MENU / SIDEBAR ───────────────────────────────────────────────────────────

var MENU = [{
  id: 'dashboard_operacional',
  label: 'Dashboard Operacional',
  icon: 'dashboard',
  group: null
}, {
  id: 'dashboard_financial',
  label: 'Dashboard Financeiro',
  icon: 'financial',
  group: null
}, {
  id: 'orders',
  label: 'Ordens de Serviço',
  icon: 'orders',
  group: null
}, {
  id: 'financial',
  label: 'Financeiro',
  icon: 'financial',
  group: null
}, {
  id: 'inventory',
  label: 'Estoque',
  icon: 'inventory',
  group: null
}, {
  id: 'fleet',
  label: 'Frota',
  icon: 'fleet',
  group: null
}, {
  id: 'customers',
  label: 'Clientes',
  icon: 'customers',
  group: 'Cadastro'
}, {
  id: 'contracts',
  label: 'Contratos',
  icon: 'contracts',
  group: 'Cadastro'
}, {
  id: 'technicians',
  label: 'Técnicos',
  icon: 'technicians',
  group: 'Cadastro'
}, {
  id: 'settings',
  label: 'Configurações',
  icon: 'settings',
  group: 'Sistema'
}];
var ALL_PAGE_IDS = MENU.map(function (m) {
  return m.id;
});
var FINANCIAL_SUBMENU_IDS = ['receivable', 'payable', 'cashflow', 'dre', 'payroll', 'approval', 'statement'];
var DEFAULT_PERMISSIONS = {
  ADMIN: _toConsumableArray(ALL_PAGE_IDS),
  MANAGER: ['dashboard_operacional', 'dashboard_financial', 'orders', 'financial', 'inventory', 'fleet', 'customers', 'contracts', 'technicians'],
  TECHNICIAN: ['dashboard_operacional', 'orders'],
  MANAGER_fin: [].concat(FINANCIAL_SUBMENU_IDS),
  TECHNICIAN_fin: ['receivable', 'payable']
};
var Sidebar = function Sidebar(_ref15) {
  var page = _ref15.page,
    setPage = _ref15.setPage,
    collapsed = _ref15.collapsed,
    setCollapsed = _ref15.setCollapsed,
    user = _ref15.user,
    permissions = _ref15.permissions;
  var role = (user === null || user === void 0 ? void 0 : user.role) || 'TECHNICIAN';
  var allowed = new Set((permissions || DEFAULT_PERMISSIONS)[role] || DEFAULT_PERMISSIONS[role] || []);
  var visibleMenu = MENU.filter(function (m) {
    return allowed.has(m.id);
  });
  var ungrouped = visibleMenu.filter(function (m) {
    return !m.group;
  });
  var groups = _toConsumableArray(new Set(visibleMenu.filter(function (m) {
    return m.group;
  }).map(function (m) {
    return m.group;
  })));
  var NavBtn = function NavBtn(_ref16) {
    var m = _ref16.m;
    return /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setPage(m.id);
      },
      className: "w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ".concat(collapsed ? 'justify-center px-0' : '', " ").concat(page === m.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'),
      title: m.label
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      className: "w-4 h-4 shrink-0"
    }), !collapsed && /*#__PURE__*/React.createElement("span", null, m.label));
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: "".concat(collapsed ? 'w-14' : 'w-60', " bg-gray-900 text-white flex flex-col h-screen sticky top-0 shrink-0 transition-all duration-200")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-3 py-3 border-b border-gray-800 ".concat(collapsed ? 'justify-center' : '')
  }, !collapsed ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: "https://opticomservice.com.br/wp-content/uploads/2025/01/Logo-opticom-700.png",
    alt: "Opticom",
    className: "h-8 object-contain",
    style: {
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCollapsed(true);
    },
    className: "ml-auto text-gray-500 hover:text-white p-1 shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevLeft",
    className: "w-4 h-4"
  }))) : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCollapsed(false);
    },
    className: "text-gray-400 hover:text-white"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-5 h-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  })))), /*#__PURE__*/React.createElement("nav", {
    className: "flex-1 py-2 overflow-y-auto"
  }, ungrouped.map(function (m) {
    return /*#__PURE__*/React.createElement(NavBtn, {
      key: m.id,
      m: m
    });
  }), groups.map(function (g) {
    return /*#__PURE__*/React.createElement("div", {
      key: g,
      className: "mt-3"
    }, !collapsed && /*#__PURE__*/React.createElement("p", {
      className: "px-4 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-widest"
    }, g), collapsed && /*#__PURE__*/React.createElement("div", {
      className: "mx-3 my-1 border-t border-gray-700"
    }), visibleMenu.filter(function (m) {
      return m.group === g;
    }).map(function (m) {
      return /*#__PURE__*/React.createElement(NavBtn, {
        key: m.id,
        m: m
      });
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-3 border-t border-gray-800 ".concat(collapsed ? 'flex justify-center' : '')
  }, !collapsed ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold shrink-0"
  }, ((user === null || user === void 0 ? void 0 : user.name) || '?')[0]), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium truncate"
  }, (user === null || user === void 0 ? void 0 : user.name) || 'Usuário'), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, (user === null || user === void 0 ? void 0 : user.role) || ''))) : /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold"
  }, ((user === null || user === void 0 ? void 0 : user.name) || '?')[0])));
};

// ─── HEADER ───────────────────────────────────────────────────────────────────

var TITLES = {
  dashboard_operacional: 'Dashboard Operacional',
  dashboard_financial: 'Dashboard Financeiro',
  orders: 'Ordens de Serviço',
  customers: 'Clientes',
  contracts: 'Contratos',
  financial: 'Financeiro',
  inventory: 'Estoque',
  technicians: 'Técnicos',
  fleet: 'Frota',
  settings: 'Configurações'
};
var Header = function Header(_ref17) {
  var _user$company;
  var page = _ref17.page,
    onLogout = _ref17.onLogout,
    setPage = _ref17.setPage,
    regime = _ref17.regime,
    user = _ref17.user;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    notifOpen = _useState6[0],
    setNotifOpen = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    dismissed = _useState8[0],
    setDismissed = _useState8[1];
  var visible = MOCK_ALERTS.filter(function (a) {
    return !dismissed.includes(a.id);
  });
  var navMap = {
    OVERDUE_RECEIVABLE: 'financial',
    BATTERY_END_OF_LIFE: 'inventory',
    LOW_STOCK: 'inventory',
    OVERDUE_ORDER: 'orders',
    CONTRACT_EXPIRING: 'contracts'
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "bg-white border-b border-gray-200 px-6 py-3.5 flex items-center justify-between sticky top-0 z-20 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-lg font-semibold text-gray-800"
  }, TITLES[page] || page), regime && /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ".concat(regime.color)
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full ".concat(regime.dot)
  }), regime.short)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNotifOpen(function (v) {
        return !v;
      });
    },
    className: "p-2 rounded-lg hover:bg-gray-100 text-gray-500 relative"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    className: "w-5 h-5"
  }), visible.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
  })), notifOpen && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-10 w-96 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-4 py-3 border-b border-gray-100"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-800"
  }, "Notifica\xE7\xF5es ", visible.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "ml-1.5 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full"
  }, visible.length)), visible.length > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setDismissed(MOCK_ALERTS.map(function (a) {
        return a.id;
      }));
    },
    className: "text-xs text-blue-600 hover:underline"
  }, "Marcar todas como lidas")), visible.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 text-center py-8"
  }, "Nenhuma notifica\xE7\xE3o pendente"), visible.map(function (a) {
    var sev = {
      HIGH: ['border-l-red-500', '🔴'],
      MEDIUM: ['border-l-amber-400', '🟡'],
      LOW: ['border-l-blue-400', '🔵']
    }[a.severity];
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      className: "border-l-4 ".concat(sev[0], " px-4 py-3 border-b border-gray-50 hover:bg-gray-50 flex items-start gap-2")
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm mt-0.5"
    }, sev[1]), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-800"
    }, a.title), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mt-0.5"
    }, a.message)), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-1 shrink-0"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setPage(navMap[a.type] || 'dashboard');
        setNotifOpen(false);
      },
      className: "text-xs text-blue-600 hover:underline"
    }, "Ver"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setDismissed(function (p) {
          return [].concat(_toConsumableArray(p), [a.id]);
        });
      },
      className: "text-xs text-gray-400 hover:text-gray-600 ml-1"
    }, "\u2715")));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm text-gray-600 border-l border-gray-200 pl-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold"
  }, ((user === null || user === void 0 ? void 0 : user.name) || '?')[0]), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:block"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-gray-700"
  }, (user === null || user === void 0 ? void 0 : user.name) || 'Usuário'), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, (user === null || user === void 0 || (_user$company = user.company) === null || _user$company === void 0 ? void 0 : _user$company.name) || 'Opticom'))), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    className: "flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 px-2 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logout",
    className: "w-4 h-4"
  }))));
};

// ─── LOGIN ────────────────────────────────────────────────────────────────────

var LoginPage = function LoginPage(_ref18) {
  var onLogin = _ref18.onLogin;
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    email = _useState0[0],
    setEmail = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    pass = _useState10[0],
    setPass = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    error = _useState14[0],
    setError = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    forgotOpen = _useState16[0],
    setForgotOpen = _useState16[1];
  var submit = /*#__PURE__*/function () {
    var _submit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var result;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            e.preventDefault();
            setError('');
            setLoading(true);

            // Validar campos
            if (!(!email || !pass)) {
              _context.n = 1;
              break;
            }
            setError('Email e senha são obrigatórios');
            setLoading(false);
            return _context.a(2);
          case 1:
            _context.n = 2;
            return api.login(email, pass);
          case 2:
            result = _context.v;
            if (result.success) {
              setTimeout(onLogin, 500);
            } else {
              setError(result.error || 'Erro ao fazer login');
              setLoading(false);
            }
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    function submit(_x) {
      return _submit.apply(this, arguments);
    }
    return submit;
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-900 flex-col items-center justify-center p-12 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full bg-white/5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-[-60px] right-[-60px] w-64 h-64 rounded-full bg-white/5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-blue-400/10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative mb-10 flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://opticomservice.com.br/wp-content/uploads/2025/01/Logo-opticom-700.png",
    alt: "Opticom",
    className: "h-20 object-contain mb-6"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-xs space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-white/90 text-lg font-semibold leading-snug"
  }, "Gest\xE3o integrada de servi\xE7os de energia e telecomunica\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
    className: "text-blue-300 text-sm"
  }, "OS \xB7 Contratos \xB7 Financeiro \xB7 Estoque \xB7 Aprova\xE7\xF5es")), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-8 left-0 right-0 flex justify-center gap-6 text-blue-400 text-xs"
  }, /*#__PURE__*/React.createElement("span", null, "CNPJ 04.176.164/0001-25"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Plano Professional"))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 bg-white flex items-center justify-center p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden flex flex-col items-center mb-8"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://opticomservice.com.br/wp-content/uploads/2025/01/Logo-opticom-700.png",
    alt: "Opticom",
    className: "h-12 object-contain mb-3"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-gray-800 mb-1"
  }, "Bem-vindo de volta"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 mb-6"
  }, "Fa\xE7a login para acessar o sistema"), error && /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4"
  }, error), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1.5"
  }, "E-mail"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1.5"
  }, "Senha"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pass,
    onChange: function onChange(e) {
      return setPass(e.target.value);
    },
    className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-sm pt-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 text-gray-600 cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true,
    className: "rounded accent-blue-600"
  }), "Lembrar-me"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setForgotOpen(true);
    },
    className: "text-blue-600 hover:underline text-xs"
  }, "Esqueceu a senha?")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: loading,
    className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-60 text-sm mt-2"
  }, loading ? /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 animate-spin",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8v8z"
  })), "Autenticando...") : 'Entrar no sistema')), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 text-center mt-8"
  }, "\xA9 2026 Opticom Telecom \xB7 CNPJ 04.176.164/0001-25")))), forgotOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black/60 flex items-center justify-center z-50",
    onClick: function onClick() {
      return setForgotOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 max-w-sm w-full mx-4 space-y-4 shadow-xl",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-semibold text-gray-800"
  }, "Redefinir Senha"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-600"
  }, "Para redefinir sua senha, solicite ao administrador do sistema em ", /*#__PURE__*/React.createElement("strong", null, "Configura\xE7\xF5es \u2192 Usu\xE1rios \u2192 Editar"), "."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500"
  }, "O administrador pode definir uma nova senha diretamente pelo painel."), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setForgotOpen(false);
    },
    className: "w-full py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700"
  }, "Entendido"))));
};

// ─── DASHBOARD ────────────────────────────────────────────────────────────────

var PERIOD_DATA = {
  day: {
    label: 'Hoje — 04/04/2026',
    sub: 'vs ontem',
    revenue: 1820000,
    expense: 1240000,
    profit: 580000,
    margin: 31.9,
    overdue: 850000,
    openOS: 5,
    completedOS: 3,
    criticalStock: 4,
    trendRevenue: 4.2,
    trendExpense: -2.1,
    trendProfit: 8.5,
    chart: [{
      label: '08h',
      a: 200000,
      b: 150000
    }, {
      label: '10h',
      a: 450000,
      b: 290000
    }, {
      label: '12h',
      a: 320000,
      b: 210000
    }, {
      label: '14h',
      a: 410000,
      b: 280000
    }, {
      label: '16h',
      a: 340000,
      b: 310000
    }, {
      label: '18h',
      a: 100000,
      b: 0
    }],
    cashFlow: [{
      v: 5000000
    }, {
      v: 5050000
    }, {
      v: 4920000
    }, {
      v: 5100000
    }, {
      v: 4980000
    }, {
      v: 4900000
    }, {
      v: 4820000
    }],
    cfLabels: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'],
    cfStart: 5000000,
    cfEnd: 4820000
  },
  week: {
    label: 'Semana — 31/03 a 04/04',
    sub: 'vs semana anterior',
    revenue: 7500000,
    expense: 5800000,
    profit: 1700000,
    margin: 22.7,
    overdue: 850000,
    openOS: 12,
    completedOS: 18,
    criticalStock: 4,
    trendRevenue: 6.3,
    trendExpense: 1.8,
    trendProfit: 9.2,
    chart: [{
      label: 'Seg',
      a: 1200000,
      b: 900000
    }, {
      label: 'Ter',
      a: 1800000,
      b: 1400000
    }, {
      label: 'Qua',
      a: 900000,
      b: 800000
    }, {
      label: 'Qui',
      a: 2100000,
      b: 1600000
    }, {
      label: 'Sex',
      a: 1500000,
      b: 1100000
    }],
    cashFlow: [{
      v: 4200000
    }, {
      v: 4500000
    }, {
      v: 4100000
    }, {
      v: 4800000
    }, {
      v: 4600000
    }, {
      v: 4900000
    }, {
      v: 5000000
    }],
    cfLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    cfStart: 4200000,
    cfEnd: 5000000
  },
  month: {
    label: 'Abril/2026',
    sub: 'vs março',
    revenue: 15000000,
    expense: 12800000,
    profit: 2200000,
    margin: 14.6,
    overdue: 850000,
    openOS: 17,
    completedOS: 34,
    criticalStock: 4,
    trendRevenue: 7.1,
    trendExpense: -1.5,
    trendProfit: 12.5,
    chart: [{
      label: 'Jan',
      a: 14000000,
      b: 12000000
    }, {
      label: 'Fev',
      a: 13500000,
      b: 11800000
    }, {
      label: 'Mar',
      a: 15000000,
      b: 12600000
    }, {
      label: 'Abr',
      a: 15000000,
      b: 12800000
    }],
    cashFlow: [{
      v: 5000000
    }, {
      v: 5180000
    }, {
      v: 4680000
    }, {
      v: 4200000
    }, {
      v: 3800000
    }, {
      v: 4200000
    }, {
      v: 3800000
    }],
    cfLabels: ['01', '05', '10', '15', '20', '25', '30'],
    cfStart: 5000000,
    cfEnd: 3800000
  },
  year: {
    label: 'Ano 2026',
    sub: 'vs 2025',
    revenue: 42000000,
    expense: 35800000,
    profit: 6200000,
    margin: 14.8,
    overdue: 2100000,
    openOS: 17,
    completedOS: 148,
    criticalStock: 4,
    trendRevenue: 11.4,
    trendExpense: 8.2,
    trendProfit: 18.7,
    chart: [{
      label: 'Jan',
      a: 14000000,
      b: 12000000
    }, {
      label: 'Fev',
      a: 13500000,
      b: 11800000
    }, {
      label: 'Mar',
      a: 15000000,
      b: 12600000
    }, {
      label: 'Abr',
      a: 15000000,
      b: 12800000
    }, {
      label: 'Mai',
      a: 0,
      b: 0
    }, {
      label: 'Jun',
      a: 0,
      b: 0
    }],
    cashFlow: [{
      v: 5000000
    }, {
      v: 4800000
    }, {
      v: 5100000
    }, {
      v: 4600000
    }, {
      v: 0
    }, {
      v: 0
    }, {
      v: 0
    }],
    cfLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    cfStart: 5000000,
    cfEnd: 4600000
  }
};
var MONTH_NAMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
var DashboardPage = function DashboardPage(_ref19) {
  var setPage = _ref19.setPage,
    _ref19$taxRegime = _ref19.taxRegime,
    taxRegime = _ref19$taxRegime === void 0 ? 'REAL' : _ref19$taxRegime,
    _ref19$type = _ref19.type,
    type = _ref19$type === void 0 ? 'operational' : _ref19$type;
  var _useState17 = useState('month'),
    _useState18 = _slicedToArray(_useState17, 2),
    period = _useState18[0],
    setPeriod = _useState18[1];
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    pipelineModal = _useState20[0],
    setPipelineModal = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    toast = _useState22[0],
    setToast = _useState22[1];
  var _useState23 = useState(''),
    _useState24 = _slicedToArray(_useState23, 2),
    pipelineFrom = _useState24[0],
    setPipelineFrom = _useState24[1];
  var _useState25 = useState(''),
    _useState26 = _slicedToArray(_useState25, 2),
    pipelineTo = _useState26[0],
    setPipelineTo = _useState26[1];
  var _useState27 = useState(function () {
      return new Date().toISOString().slice(0, 7);
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    dashMonth = _useState28[0],
    setDashMonth = _useState28[1];
  var _useState29 = useState({
      openOrders: 0,
      completedOrders: 0,
      invoicedOrders: 0,
      activeContracts: 0,
      totalCustomers: 0,
      lowStockItems: 0,
      receivedRevenue: 0,
      paidExpense: 0,
      pendingRevenue: 0,
      pendingExpense: 0
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    stats = _useState30[0],
    setStats = _useState30[1];
  var _useState31 = useState([]),
    _useState32 = _slicedToArray(_useState31, 2),
    allOrders = _useState32[0],
    setAllOrders = _useState32[1];
  var _useState33 = useState([]),
    _useState34 = _slicedToArray(_useState33, 2),
    chartData = _useState34[0],
    setChartData = _useState34[1];
  var _useState35 = useState([]),
    _useState36 = _slicedToArray(_useState35, 2),
    alerts = _useState36[0],
    setAlerts = _useState36[1];
  var d = PERIOD_DATA[period];
  var displayAlerts = alerts.filter(function (a) {
    if (type === 'operational') {
      return ['OVERDUE_ORDER', 'CONTRACT_EXPIRING', 'LOW_STOCK'].includes(a.type);
    } else {
      return ['OVERDUE_RECEIVABLE', 'OVERDUE_PAYABLE'].includes(a.type);
    }
  });
  useEffect(function () {
    loadDashboard(dashMonth);
  }, [dashMonth]);
  var buildWeeklyChart = function buildWeeklyChart(txs, month) {
    if (!month || !txs.length) return [];
    var _month$split$map = month.split('-').map(Number),
      _month$split$map2 = _slicedToArray(_month$split$map, 2),
      y = _month$split$map2[0],
      m = _month$split$map2[1];
    var last = new Date(y, m, 0).getDate();
    var pad = function pad(n) {
      return String(n).padStart(2, '0');
    };
    return [{
      label: 'Sem 1',
      from: "".concat(month, "-01"),
      to: "".concat(month, "-07")
    }, {
      label: 'Sem 2',
      from: "".concat(month, "-08"),
      to: "".concat(month, "-14")
    }, {
      label: 'Sem 3',
      from: "".concat(month, "-15"),
      to: "".concat(month, "-21")
    }, {
      label: 'Sem 4',
      from: "".concat(month, "-22"),
      to: "".concat(month, "-").concat(pad(last))
    }].map(function (w) {
      return {
        label: w.label,
        a: txs.filter(function (t) {
          return t.type === 'INCOME' && (t.due_date || '') >= w.from && (t.due_date || '') <= w.to;
        }).reduce(function (s, t) {
          return s + (t.amount || 0);
        }, 0),
        b: txs.filter(function (t) {
          return t.type === 'EXPENSE' && (t.due_date || '') >= w.from && (t.due_date || '') <= w.to;
        }).reduce(function (s, t) {
          return s + (t.amount || 0);
        }, 0)
      };
    });
  };
  var loadDashboard = /*#__PURE__*/function () {
    var _loadDashboard = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(month) {
      var _ordRes$data, _custRes$data, _ctRes$data, _txRes$data, _prodRes$data;
      var _yield$Promise$all, _yield$Promise$all2, ordRes, custRes, ctRes, txRes, prodRes, orders, customers, contracts, txsAll, products, txs, ordM, openSt, receivedRevenue, paidExpense, pendingRevenue, pendingExpense, now, in30, newAlerts;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return Promise.all([api.getOrders({
              limit: 200
            }), api.getCustomers(), api.getContracts(), api.getTransactions({
              limit: 500
            }), api.getProducts()]);
          case 1:
            _yield$Promise$all = _context2.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 5);
            ordRes = _yield$Promise$all2[0];
            custRes = _yield$Promise$all2[1];
            ctRes = _yield$Promise$all2[2];
            txRes = _yield$Promise$all2[3];
            prodRes = _yield$Promise$all2[4];
            orders = ordRes.success ? ((_ordRes$data = ordRes.data) === null || _ordRes$data === void 0 ? void 0 : _ordRes$data.data) || ordRes.data || [] : [];
            customers = custRes.success ? ((_custRes$data = custRes.data) === null || _custRes$data === void 0 ? void 0 : _custRes$data.data) || custRes.data || [] : [];
            contracts = ctRes.success ? ((_ctRes$data = ctRes.data) === null || _ctRes$data === void 0 ? void 0 : _ctRes$data.data) || ctRes.data || [] : [];
            txsAll = txRes.success ? ((_txRes$data = txRes.data) === null || _txRes$data === void 0 ? void 0 : _txRes$data.data) || txRes.data || [] : [];
            products = prodRes.success ? ((_prodRes$data = prodRes.data) === null || _prodRes$data === void 0 ? void 0 : _prodRes$data.data) || prodRes.data || [] : [];
            txs = month ? txsAll.filter(function (t) {
              return (t.due_date || '').startsWith(month);
            }) : txsAll;
            ordM = month ? orders.filter(function (o) {
              return (o.scheduled_date || o.created_at || '').startsWith(month);
            }) : orders;
            openSt = ['OPEN', 'SCHEDULED', 'IN_TRANSIT', 'IN_PROGRESS'];
            receivedRevenue = txs.filter(function (t) {
              return t.type === 'INCOME' && t.status === 'RECEIVED';
            }).reduce(function (s, t) {
              return s + (t.amount || 0);
            }, 0);
            paidExpense = txs.filter(function (t) {
              return t.type === 'EXPENSE' && t.status === 'PAID';
            }).reduce(function (s, t) {
              return s + (t.amount || 0);
            }, 0);
            pendingRevenue = txs.filter(function (t) {
              return t.type === 'INCOME' && t.status === 'PENDING';
            }).reduce(function (s, t) {
              return s + (t.amount || 0);
            }, 0);
            pendingExpense = txs.filter(function (t) {
              return t.type === 'EXPENSE' && t.status === 'PENDING';
            }).reduce(function (s, t) {
              return s + (t.amount || 0);
            }, 0);
            setStats({
              openOrders: ordM.filter(function (o) {
                return openSt.includes(o.status);
              }).length,
              completedOrders: ordM.filter(function (o) {
                return o.status === 'COMPLETED';
              }).length,
              invoicedOrders: ordM.filter(function (o) {
                return o.status === 'INVOICED';
              }).length,
              activeContracts: contracts.filter(function (c) {
                return c.status === 'ACTIVE';
              }).length,
              totalCustomers: customers.length,
              lowStockItems: products.filter(function (p) {
                return (p.quantity || 0) <= (p.min_stock || 0) && (p.min_stock || 0) > 0;
              }).length,
              receivedRevenue: receivedRevenue,
              paidExpense: paidExpense,
              pendingRevenue: pendingRevenue,
              pendingExpense: pendingExpense
            });
            setAllOrders(ordM);
            setChartData(buildWeeklyChart(txsAll, month));
            now = new Date();
            in30 = new Date();
            in30.setDate(in30.getDate() + 30);
            newAlerts = [];
            orders.filter(function (o) {
              return o.scheduled_date && new Date(o.scheduled_date) < now && openSt.includes(o.status);
            }).slice(0, 3).forEach(function (o) {
              newAlerts.push({
                id: "os-".concat(o.id),
                severity: 'HIGH',
                title: 'OS em atraso',
                message: "".concat(o.number, " \u2014 agendada ").concat(new Date(o.scheduled_date).toLocaleDateString('pt-BR')),
                type: 'OVERDUE_ORDER'
              });
            });
            contracts.filter(function (c) {
              return c.status === 'ACTIVE' && c.end_date && new Date(c.end_date) <= in30;
            }).slice(0, 3).forEach(function (c) {
              newAlerts.push({
                id: "ct-".concat(c.id),
                severity: 'MEDIUM',
                title: 'Contrato expirando',
                message: "".concat(c.number, " expira em ").concat(new Date(c.end_date).toLocaleDateString('pt-BR')),
                type: 'CONTRACT_EXPIRING'
              });
            });
            products.filter(function (p) {
              return (p.quantity || 0) <= (p.min_stock || 0) && (p.min_stock || 0) > 0;
            }).slice(0, 2).forEach(function (p) {
              newAlerts.push({
                id: "inv-".concat(p.id),
                severity: 'MEDIUM',
                title: 'Estoque crítico',
                message: "\"".concat(p.name, "\" \u2014 ").concat(p.quantity || 0, " un. (m\xEDn: ").concat(p.min_stock || 0, ")"),
                type: 'LOW_STOCK'
              });
            });
            txs.filter(function (t) {
              return t.due_date && new Date(t.due_date) < now && t.status === 'PENDING';
            }).slice(0, 2).forEach(function (t) {
              newAlerts.push({
                id: "tx-".concat(t.id),
                severity: t.type === 'INCOME' ? 'HIGH' : 'MEDIUM',
                title: t.type === 'INCOME' ? 'Recebimento em atraso' : 'Pagamento em atraso',
                message: "".concat(t.description || '—', " \u2014 venceu ").concat(new Date(t.due_date).toLocaleDateString('pt-BR')),
                type: t.type === 'INCOME' ? 'OVERDUE_RECEIVABLE' : 'OVERDUE_PAYABLE'
              });
            });
            setAlerts(newAlerts);
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    function loadDashboard(_x2) {
      return _loadDashboard.apply(this, arguments);
    }
    return loadDashboard;
  }();
  var openPipeline = function openPipeline(step) {
    var statusMap = {
      open: 'OPEN',
      scheduled: 'SCHEDULED',
      progress: 'IN_TRANSIT,IN_PROGRESS',
      completed: 'COMPLETED',
      invoiced: 'INVOICED'
    };
    var statuses = (statusMap[step] || '').split(',');
    var data = allOrders.filter(function (o) {
      return statuses.includes(o.status);
    }).map(function (o) {
      var _o$customers, _o$technicians, _o$created_at;
      return {
        number: o.number,
        customer: ((_o$customers = o.customers) === null || _o$customers === void 0 ? void 0 : _o$customers.name) || '—',
        type: o.type || '—',
        tech: ((_o$technicians = o.technicians) === null || _o$technicians === void 0 ? void 0 : _o$technicians.name) || 'Não atribuído',
        date: o.scheduled_date || ((_o$created_at = o.created_at) === null || _o$created_at === void 0 ? void 0 : _o$created_at.split('T')[0]) || '—'
      };
    });
    var titles = {
      open: 'OS Abertas',
      scheduled: 'OS Agendadas',
      progress: 'OS em Andamento',
      completed: 'OS Concluídas',
      invoiced: 'OS Faturadas'
    };
    setPipelineModal({
      title: titles[step] || step,
      data: data,
      cols: ['Nº OS', 'Cliente', 'Tipo', 'Técnico', 'Data'],
      row: function row(r) {
        return [r.number, r.customer, r.type, r.tech, r.date];
      }
    });
  };
  var RevExpChart = function RevExpChart(_ref20) {
    var data = _ref20.data;
    var maxVal = Math.max.apply(Math, _toConsumableArray(data.flatMap(function (d) {
      return [d.a, d.b];
    }).filter(function (v) {
      return v > 0;
    }))) || 1;
    var barH = 120;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-end gap-3",
      style: {
        height: barH + 40
      }
    }, data.map(function (col, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex-1 flex flex-col items-center gap-0.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex gap-0.5 w-full justify-center mb-1",
        style: {
          minHeight: 28
        }
      }, col.a > 0 && /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-blue-600 font-semibold",
        style: {
          fontSize: '10px'
        }
      }, fmt(col.a).replace("R$\xA0", '').replace(',00', ''))), /*#__PURE__*/React.createElement("div", {
        className: "flex items-end gap-0.5 w-full",
        style: {
          height: barH
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-1 rounded-t-sm transition-all relative group",
        style: {
          height: col.a > 0 ? "".concat(col.a / maxVal * barH, "px") : '2px',
          background: '#3b82f6',
          opacity: col.a > 0 ? 0.85 : 0.15
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10"
      }, "Receita: ", fmt(col.a))), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 rounded-t-sm transition-all relative group",
        style: {
          height: col.b > 0 ? "".concat(col.b / maxVal * barH, "px") : '2px',
          background: '#f87171',
          opacity: col.b > 0 ? 0.85 : 0.15
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10"
      }, "Despesa: ", fmt(col.b)))), /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-gray-400 mt-1"
      }, col.label));
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-center"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Total Receita"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-blue-600"
    }, fmt(data.reduce(function (s, c) {
      return s + c.a;
    }, 0)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Total Despesa"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-red-500"
    }, fmt(data.reduce(function (s, c) {
      return s + c.b;
    }, 0)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Lucro"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-green-600"
    }, fmt(data.reduce(function (s, c) {
      return s + (c.a - c.b);
    }, 0))))));
  };
  var prevMonthNav = function prevMonthNav() {
    var _dashMonth$split$map = dashMonth.split('-').map(Number),
      _dashMonth$split$map2 = _slicedToArray(_dashMonth$split$map, 2),
      y = _dashMonth$split$map2[0],
      m = _dashMonth$split$map2[1];
    setDashMonth(m === 1 ? "".concat(y - 1, "-12") : "".concat(y, "-").concat(String(m - 1).padStart(2, '0')));
  };
  var nextMonthNav = function nextMonthNav() {
    var _dashMonth$split$map3 = dashMonth.split('-').map(Number),
      _dashMonth$split$map4 = _slicedToArray(_dashMonth$split$map3, 2),
      y = _dashMonth$split$map4[0],
      m = _dashMonth$split$map4[1];
    var now = new Date();
    var cur = "".concat(y, "-").concat(String(m).padStart(2, '0'));
    var nowM = "".concat(now.getFullYear(), "-").concat(String(now.getMonth() + 1).padStart(2, '0'));
    if (cur >= nowM) return;
    setDashMonth(m === 12 ? "".concat(y + 1, "-01") : "".concat(y, "-").concat(String(m + 1).padStart(2, '0')));
  };
  var dashMonthLabel = function () {
    var _dashMonth$split$map5 = dashMonth.split('-').map(Number),
      _dashMonth$split$map6 = _slicedToArray(_dashMonth$split$map5, 2),
      y = _dashMonth$split$map6[0],
      m = _dashMonth$split$map6[1];
    return "".concat(MONTH_NAMES[m - 1], " ").concat(y);
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 bg-white border border-gray-200 rounded-xl shadow-sm px-2 py-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: prevMonthNav,
    className: "p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 19l-7-7 7-7"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "month",
    value: dashMonth,
    onChange: function onChange(e) {
      return setDashMonth(e.target.value);
    },
    className: "text-sm font-semibold text-gray-700 border-none outline-none bg-transparent cursor-pointer px-1"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: nextMonthNav,
    className: "p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5l7 7-7 7"
  })))), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold text-gray-600"
  }, dashMonthLabel), type === 'financial' && function () {
    var tr = TAX_REGIMES[taxRegime];
    return /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ".concat(tr.color)
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full ".concat(tr.dot)
    }), tr.label);
  }()), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setDashMonth(new Date().toISOString().slice(0, 7));
    },
    className: "text-xs text-blue-600 hover:underline font-medium"
  }, "M\xEAs atual")), type === 'financial' && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 xl:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement(KPI, {
    title: "Receita Recebida",
    value: fmt(stats.receivedRevenue),
    sub: "+ ".concat(fmt(stats.pendingRevenue), " pendente"),
    icon: "financial",
    color: "green"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "Despesas Pagas",
    value: fmt(stats.paidExpense),
    sub: "+ ".concat(fmt(stats.pendingExpense), " pendente"),
    icon: "financial",
    color: "red"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "Resultado",
    value: fmt(stats.receivedRevenue - stats.paidExpense),
    sub: stats.receivedRevenue > 0 ? "Margem: ".concat(((1 - stats.paidExpense / stats.receivedRevenue) * 100).toFixed(1), "%") : '—',
    icon: "financial",
    color: "blue"
  })), type === 'operational' && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 xl:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement(KPI, {
    title: "OS Abertas",
    value: String(stats.openOrders),
    sub: "".concat(stats.invoicedOrders, " faturadas"),
    icon: "orders",
    color: "orange"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "OS Conclu\xEDdas",
    value: String(stats.completedOrders),
    sub: "".concat(stats.activeContracts, " contratos ativos"),
    icon: "orders",
    color: "green"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "Clientes Ativos",
    value: String(stats.totalCustomers),
    sub: stats.lowStockItems > 0 ? "".concat(stats.lowStockItems, " itens em falta no estoque") : 'estoque OK',
    icon: "customers",
    color: stats.lowStockItems > 0 ? 'red' : 'blue'
  })), type === 'operational' && /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-5 py-3.5 border-b border-gray-100 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold text-gray-800"
  }, "Pipeline de Faturamento \u2014 OS"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Clique em qualquer etapa para ver as ordens")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "De:"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: pipelineFrom,
    onChange: function onChange(e) {
      return setPipelineFrom(e.target.value);
    },
    className: "text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "At\xE9:"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: pipelineTo,
    onChange: function onChange(e) {
      return setPipelineTo(e.target.value);
    },
    className: "text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none"
  }), (pipelineFrom || pipelineTo) && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPipelineFrom('');
      setPipelineTo('');
    },
    className: "text-xs text-gray-400 hover:text-red-500 font-bold"
  }, "\u2715"))), function () {
    var stages = [{
      key: 'open',
      label: 'Abertas',
      count: allOrders.filter(function (o) {
        return o.status === 'OPEN';
      }).length,
      icon: '📋',
      color: 'text-gray-600',
      bg: 'bg-gray-100',
      bar: 'bg-gray-400',
      sub: 'aguardando atribuição'
    }, {
      key: 'scheduled',
      label: 'Agendadas',
      count: allOrders.filter(function (o) {
        return o.status === 'SCHEDULED';
      }).length,
      icon: '📅',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      bar: 'bg-blue-400',
      sub: 'técnico designado'
    }, {
      key: 'progress',
      label: 'Em Andamento',
      count: allOrders.filter(function (o) {
        return ['IN_TRANSIT', 'IN_PROGRESS'].includes(o.status);
      }).length,
      icon: '🔧',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      bar: 'bg-orange-400',
      sub: 'em campo / execução'
    }, {
      key: 'completed',
      label: 'Concluídas',
      count: allOrders.filter(function (o) {
        return o.status === 'COMPLETED';
      }).length,
      icon: '✅',
      color: 'text-green-600',
      bg: 'bg-green-50',
      bar: 'bg-green-500',
      sub: 'aguardando faturamento'
    }, {
      key: 'invoiced',
      label: 'Faturadas',
      count: allOrders.filter(function (o) {
        return o.status === 'INVOICED';
      }).length,
      icon: '🧾',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      bar: 'bg-purple-400',
      sub: 'nota fiscal emitida'
    }];
    var total = allOrders.length || 1;
    return /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-5 divide-x divide-gray-100"
    }, stages.map(function (s, i) {
      var pct = Math.round(s.count / total * 100);
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: function onClick() {
          return openPipeline(s.key);
        },
        className: "p-5 text-left hover:bg-gray-50 transition-colors group"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between mb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(s.bg, " ").concat(s.color, " w-9 h-9 rounded-lg flex items-center justify-center text-base")
      }, s.icon), i < 4 && /*#__PURE__*/React.createElement("span", {
        className: "text-gray-200 text-xl mt-0.5"
      }, "\u203A")), /*#__PURE__*/React.createElement("p", {
        className: "text-2xl font-bold text-gray-900"
      }, s.count), /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-gray-600 mt-0.5"
      }, s.label), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 mt-0.5"
      }, s.sub), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 w-full bg-gray-100 rounded-full h-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "h-1.5 rounded-full ".concat(s.bar),
        style: {
          width: "".concat(pct, "%")
        }
      })), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 mt-1 group-hover:text-blue-500"
      }, pct, "% do total \u2192"));
    }));
  }()), type === 'operational' && /*#__PURE__*/React.createElement(Modal, {
    open: !!pipelineModal,
    onClose: function onClose() {
      return setPipelineModal(null);
    },
    title: (pipelineModal === null || pipelineModal === void 0 ? void 0 : pipelineModal.title) || '',
    size: "xl"
  }, pipelineModal && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500"
  }, pipelineModal.data.length, " ordens de servi\xE7o"), pipelineModal.data.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 italic"
  }, "Nenhuma OS nesta etapa")), /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50"
  }, /*#__PURE__*/React.createElement("tr", null, pipelineModal.cols.map(function (c) {
    return /*#__PURE__*/React.createElement("th", {
      key: c,
      className: "px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, c);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100"
  }, pipelineModal.data.map(function (r, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      className: "hover:bg-gray-50"
    }, pipelineModal.row(r).map(function (cell, j) {
      return /*#__PURE__*/React.createElement("td", {
        key: j,
        className: "px-4 py-3 ".concat(j === 0 ? 'font-mono text-xs font-semibold text-gray-700' : j === pipelineModal.cols.length - 1 ? 'font-semibold text-gray-800 text-right' : 'text-gray-600')
      }, cell);
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPipelineModal(null);
      setPage('orders');
    },
    className: "flex-1 py-2.5 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50"
  }, "Ver todas as OS \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPipelineModal(null);
      setPage('financial');
    },
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Ir para Financeiro \u2192")))), type === 'financial' && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 xl:grid-cols-3 gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold text-gray-800"
  }, "Receita vs Despesa"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, dashMonthLabel, " \u2014 por semana")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 text-xs text-gray-500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded bg-blue-500 inline-block"
  }), "Receita"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded bg-red-400 inline-block"
  }), "Despesa"))), /*#__PURE__*/React.createElement(RevExpChart, {
    data: chartData.length > 0 ? chartData : d.chart
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between w-full mb-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold text-gray-800"
  }, "Health Score"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Sa\xFAde financeira geral"))), /*#__PURE__*/React.createElement(Gauge, {
    score: 72
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-x-4 gap-y-1.5 w-full mt-1"
  }, [['Liquidez', '80'], ['Inadimplência', '75'], ['Margem', '65'], ['Tendência', '70']].map(function (_ref21) {
    var _ref22 = _slicedToArray(_ref21, 2),
      l = _ref22[0],
      s = _ref22[1];
    return /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-xs text-gray-500 mb-0.5"
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, s)), /*#__PURE__*/React.createElement("div", {
      className: "w-full h-1.5 bg-gray-100 rounded-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-1.5 bg-blue-500 rounded-full",
      style: {
        width: "".concat(s, "%")
      }
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3 flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold text-gray-800"
  }, "Evolu\xE7\xE3o do Caixa"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, d.label)), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold px-2 py-0.5 rounded-full ".concat(d.cfEnd >= d.cfStart ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700')
  }, d.cfEnd >= d.cfStart ? '▲' : '▼', " ", Math.abs((d.cfEnd - d.cfStart) / d.cfStart * 100).toFixed(1), "%")), /*#__PURE__*/React.createElement(LineChart, {
    data: d.cashFlow,
    color: "#10b981",
    height: 130
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between mt-1 mb-3 text-xs text-gray-400"
  }, d.cfLabels.map(function (l) {
    return /*#__PURE__*/React.createElement("span", {
      key: l
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-gray-100 pt-3 space-y-1"
  }, [{
    l: 'Saldo Inicial',
    v: d.cfStart,
    cls: 'text-gray-700'
  }, {
    l: 'Saldo Final',
    v: d.cfEnd,
    cls: d.cfEnd >= d.cfStart ? 'text-green-600' : 'text-red-600'
  }, {
    l: 'Variação',
    v: d.cfEnd - d.cfStart,
    cls: d.cfEnd >= d.cfStart ? 'text-green-600' : 'text-red-600',
    showSign: true
  }, {
    l: 'Mínimo',
    v: Math.min.apply(Math, _toConsumableArray(d.cashFlow.filter(function (c) {
      return c.v > 0;
    }).map(function (c) {
      return c.v;
    }))),
    cls: 'text-gray-500'
  }, {
    l: 'Máximo',
    v: Math.max.apply(Math, _toConsumableArray(d.cashFlow.map(function (c) {
      return c.v;
    }))),
    cls: 'text-gray-500'
  }].map(function (_ref23) {
    var l = _ref23.l,
      v = _ref23.v,
      cls = _ref23.cls,
      showSign = _ref23.showSign;
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      className: "flex justify-between text-xs"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, l), /*#__PURE__*/React.createElement("span", {
      className: "font-semibold ".concat(cls)
    }, showSign && v > 0 ? '+' : '', fmt(v)));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-5 py-3.5 border-b border-gray-100 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold text-gray-800"
  }, "Alertas Ativos"), displayAlerts.length > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full"
  }, displayAlerts.length) : /*#__PURE__*/React.createElement("span", {
    className: "bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full"
  }, "0")), displayAlerts.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "px-5 py-6 text-sm text-gray-400 text-center"
  }, "Nenhum alerta pendente") : displayAlerts.map(function (a) {
    var sev = {
      HIGH: ['border-l-red-500', 'bg-red-50', '🔴'],
      MEDIUM: ['border-l-amber-400', 'bg-amber-50', '🟡'],
      LOW: ['border-l-blue-400', 'bg-blue-50', '🔵']
    }[a.severity] || ['border-l-gray-300', 'bg-gray-50', '⚪'];
    var navMap2 = {
      OVERDUE_RECEIVABLE: 'financial',
      OVERDUE_PAYABLE: 'financial',
      LOW_STOCK: 'inventory',
      OVERDUE_ORDER: 'orders',
      CONTRACT_EXPIRING: 'contracts'
    };
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      className: "flex items-start gap-3 px-5 py-3 border-l-4 ".concat(sev[0], " ").concat(sev[1], " border-b border-gray-50 last:border-b-0")
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm mt-0.5"
    }, sev[2]), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-800"
    }, a.title), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mt-0.5"
    }, a.message)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setPage(navMap2[a.type] || 'dashboard_operacional');
      },
      className: "text-xs text-blue-600 hover:underline shrink-0 font-medium whitespace-nowrap"
    }, "Ver \u2192"));
  })), type === 'financial' && function () {
    var tr = TAX_REGIMES[taxRegime];
    return /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border p-4 flex items-center gap-5 flex-wrap ".concat(tr.color.replace('text-', 'border-').replace('100', '200'), " bg-white")
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 rounded-full ".concat(tr.dot)
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Regime Tribut\xE1rio Ativo"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-gray-800"
    }, tr.label))), /*#__PURE__*/React.createElement("div", {
      className: "h-8 w-px bg-gray-200"
    }), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-500 space-y-0.5"
    }, /*#__PURE__*/React.createElement("p", null, tr.method), /*#__PURE__*/React.createElement("span", {
      className: "inline-block px-2 py-0.5 rounded text-xs font-medium ".concat(tr.obColor)
    }, tr.obligation)), /*#__PURE__*/React.createElement("div", {
      className: "ml-auto flex items-center gap-4 text-xs"
    }, tr.iss && /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "ISS"), /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-700"
    }, (tr.iss * 100).toFixed(0), "%")), tr.pis && /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "PIS"), /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-700"
    }, (tr.pis * 100).toFixed(2), "%")), tr.cofins && /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "COFINS"), /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-700"
    }, (tr.cofins * 100).toFixed(2), "%")), tr.dasRate && /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "DAS"), /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-700"
    }, (tr.dasRate * 100).toFixed(1), "%")), tr.irpjRate && /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "IRPJ"), /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-700"
    }, (tr.irpjRate * 100).toFixed(0), "%+")), tr.csllRate && /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "CSLL"), /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-700"
    }, (tr.csllRate * 100).toFixed(0), "%"))));
  }(), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast,
    onClose: function onClose() {
      return setToast(null);
    }
  }));
};

// ─── ORDERS ───────────────────────────────────────────────────────────────────

var STATUS_FLOW = {
  OPEN: {
    next: 'SCHEDULED',
    label: 'Agendar OS',
    color: 'blue'
  },
  SCHEDULED: {
    next: 'IN_TRANSIT',
    label: 'Despachar Técnico',
    color: 'sky'
  },
  IN_TRANSIT: {
    next: 'IN_PROGRESS',
    label: 'Iniciar Atendimento',
    color: 'orange'
  },
  IN_PROGRESS: {
    next: 'COMPLETED',
    label: 'Concluir OS',
    color: 'green'
  },
  COMPLETED: {
    next: 'INVOICED',
    label: 'Faturar OS',
    color: 'purple'
  }
};
var COLS = [{
  key: 'OPEN',
  label: 'Abertas',
  bg: 'bg-gray-100',
  text: 'text-gray-700'
}, {
  key: 'SCHEDULED',
  label: 'Agendadas',
  bg: 'bg-blue-100',
  text: 'text-blue-700'
}, {
  key: 'IN_TRANSIT',
  label: 'Em Trânsito',
  bg: 'bg-sky-100',
  text: 'text-sky-700'
}, {
  key: 'IN_PROGRESS',
  label: 'Em Andamento',
  bg: 'bg-orange-100',
  text: 'text-orange-700'
}, {
  key: 'COMPLETED',
  label: 'Concluídas',
  bg: 'bg-green-100',
  text: 'text-green-700'
}, {
  key: 'INVOICED',
  label: 'Faturadas',
  bg: 'bg-purple-100',
  text: 'text-purple-700'
}];
var OrdersPage = function OrdersPage(_ref24) {
  var _selOS$customers;
  var _ref24$taxRegime = _ref24.taxRegime,
    taxRegime = _ref24$taxRegime === void 0 ? 'REAL' : _ref24$taxRegime;
  var _useState37 = useState('kanban'),
    _useState38 = _slicedToArray(_useState37, 2),
    view = _useState38[0],
    setView = _useState38[1];
  var _useState39 = useState(''),
    _useState40 = _slicedToArray(_useState39, 2),
    q = _useState40[0],
    setQ = _useState40[1];
  var _useState41 = useState([]),
    _useState42 = _slicedToArray(_useState41, 2),
    orders = _useState42[0],
    setOrders = _useState42[1];
  var _useState43 = useState(true),
    _useState44 = _slicedToArray(_useState43, 2),
    loading = _useState44[0],
    setLoading = _useState44[1];
  var _useState45 = useState(null),
    _useState46 = _slicedToArray(_useState45, 2),
    selected = _useState46[0],
    setSelected = _useState46[1];
  var _useState47 = useState(false),
    _useState48 = _slicedToArray(_useState47, 2),
    newModal = _useState48[0],
    setNewModal = _useState48[1];
  var _useState49 = useState(null),
    _useState50 = _slicedToArray(_useState49, 2),
    toast = _useState50[0],
    setToast = _useState50[1];
  var _useState51 = useState([]),
    _useState52 = _slicedToArray(_useState51, 2),
    technicians = _useState52[0],
    setTechnicians = _useState52[1];
  var _useState53 = useState([]),
    _useState54 = _slicedToArray(_useState53, 2),
    customers = _useState54[0],
    setCustomers = _useState54[1];
  useEffect(function () {
    loadOrders();
    api.getTechnicians().then(function (r) {
      var _r$data;
      if (r.success) setTechnicians(((_r$data = r.data) === null || _r$data === void 0 ? void 0 : _r$data.data) || r.data || []);
    });
    api.getCustomers().then(function (r) {
      var _r$data2;
      if (r.success) setCustomers(((_r$data2 = r.data) === null || _r$data2 === void 0 ? void 0 : _r$data2.data) || r.data || []);
    });
  }, []);
  var loadOrders = /*#__PURE__*/function () {
    var _loadOrders = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var result, _result$data;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            setLoading(true);
            _context3.n = 1;
            return api.getOrders();
          case 1:
            result = _context3.v;
            if (result.success) {
              setOrders(((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.data) || result.data || []);
            } else {
              setOrders([]);
            }
            setLoading(false);
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    function loadOrders() {
      return _loadOrders.apply(this, arguments);
    }
    return loadOrders;
  }();
  var _useState55 = useState({
      customer_id: '',
      type: 'Instalação',
      priority: 'MEDIUM',
      difficulty: 'MEDIUM',
      description: '',
      scheduled_date: '',
      assigned_technician_id: '',
      additional_technicians: [],
      substation: '',
      city: ''
    }),
    _useState56 = _slicedToArray(_useState55, 2),
    newOS = _useState56[0],
    setNewOS = _useState56[1];
  var _useState57 = useState(false),
    _useState58 = _slicedToArray(_useState57, 2),
    nfModal = _useState58[0],
    setNfModal = _useState58[1];
  var _useState59 = useState({
      number: '',
      series: '1',
      date: '',
      value: ''
    }),
    _useState60 = _slicedToArray(_useState59, 2),
    nfData = _useState60[0],
    setNfData = _useState60[1];
  var _useState61 = useState(null),
    _useState62 = _slicedToArray(_useState61, 2),
    pendingInvoice = _useState62[0],
    setPendingInvoice = _useState62[1];
  var _useState63 = useState(false),
    _useState64 = _slicedToArray(_useState63, 2),
    editModal = _useState64[0],
    setEditModal = _useState64[1];
  var _useState65 = useState(null),
    _useState66 = _slicedToArray(_useState65, 2),
    editData = _useState66[0],
    setEditData = _useState66[1];
  var advance = /*#__PURE__*/function () {
    var _advance = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id, nf) {
      var o, flow, result;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            o = orders.find(function (o) {
              return o.id === id;
            });
            flow = STATUS_FLOW[o === null || o === void 0 ? void 0 : o.status];
            if (flow) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            _context4.n = 2;
            return api.updateOrder(id, {
              status: flow.next
            });
          case 2:
            result = _context4.v;
            if (result.success) {
              setOrders(function (prev) {
                return prev.map(function (x) {
                  return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
                    status: flow.next
                  }, nf ? {
                    nf: nf
                  } : {}) : x;
                });
              });
              setSelected(function (prev) {
                return prev ? _objectSpread(_objectSpread({}, prev), {}, {
                  status: flow.next
                }, nf ? {
                  nf: nf
                } : {}) : null;
              });
              setToast("OS ".concat(o.number, ": ").concat(flow.label, " conclu\xEDdo!"));
            } else {
              setToast("Erro ao avan\xE7ar OS: ".concat(result.error));
            }
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    function advance(_x3, _x4) {
      return _advance.apply(this, arguments);
    }
    return advance;
  }();
  var requestInvoice = function requestInvoice(id) {
    var today = new Date().toISOString().split('T')[0];
    setNfData({
      number: '',
      series: '1',
      date: today,
      value: ''
    });
    setPendingInvoice(id);
    setNfModal(true);
  };
  var confirmInvoice = function confirmInvoice() {
    if (!nfData.number.trim()) return;
    advance(pendingInvoice, nfData);
    setNfModal(false);
    setPendingInvoice(null);
    setToast("NF ".concat(nfData.number, " vinculada com sucesso!"));
  };
  var cancel = /*#__PURE__*/function () {
    var _cancel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id) {
      var o, result;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            o = orders.find(function (o) {
              return o.id === id;
            });
            _context5.n = 1;
            return api.updateOrder(id, {
              status: 'CANCELLED'
            });
          case 1:
            result = _context5.v;
            if (result.success) {
              setOrders(function (prev) {
                return prev.map(function (x) {
                  return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
                    status: 'CANCELLED'
                  }) : x;
                });
              });
              setToast("OS ".concat(o === null || o === void 0 ? void 0 : o.number, " cancelada."));
              setSelected(null);
            } else {
              setToast("Erro ao cancelar OS: ".concat(result.error));
            }
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    function cancel(_x5) {
      return _cancel.apply(this, arguments);
    }
    return cancel;
  }();
  var assignTech = /*#__PURE__*/function () {
    var _assignTech = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(id, assigned_technician_id) {
      var result;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return api.updateOrder(id, {
              assigned_technician_id: assigned_technician_id || null
            });
          case 1:
            result = _context6.v;
            if (result.success) {
              setOrders(function (prev) {
                return prev.map(function (x) {
                  return x.id === id ? result.data : x;
                });
              });
              setSelected(function (prev) {
                return prev ? result.data : null;
              });
            }
          case 2:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    function assignTech(_x6, _x7) {
      return _assignTech.apply(this, arguments);
    }
    return assignTech;
  }();
  var saveEditOS = /*#__PURE__*/function () {
    var _saveEditOS = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee_edit() {
      var result;
      return _regenerator().w(function (_context_edit) {
        while (1) switch (_context_edit.n) {
          case 0:
            if (editData) {
              _context_edit.n = 1;
              break;
            }
            return _context_edit.a(2);
          case 1:
            _context_edit.n = 2;
            return api.updateOrder(editData.id, {
              type: editData.type,
              priority: editData.priority,
              difficulty: editData.difficulty || 'MEDIUM',
              scheduled_date: editData.scheduled_date,
              assigned_technician_id: editData.assigned_technician_id || null,
              additional_technicians: editData.additional_technicians || [],
              substation: editData.substation || null,
              city: editData.city || null,
              description: editData.description || null
            });
          case 2:
            result = _context_edit.v;
            if (result.success) {
              setOrders(function (prev) {
                return prev.map(function (x) {
                  return x.id === editData.id ? result.data : x;
                });
              });
              setSelected(result.data);
              setEditModal(false);
              setEditData(null);
              setToast('OS atualizada com sucesso!');
            } else {
              setToast("Erro ao salvar: ".concat(result.error));
            }
          case 3:
            return _context_edit.a(2);
        }
      }, _callee_edit);
    }));
    function saveEditOS() {
      return _saveEditOS.apply(this, arguments);
    }
    return saveEditOS;
  }();
  var createOS = /*#__PURE__*/function () {
    var _createOS = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var result;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (newOS.customer_id) {
              _context7.n = 1;
              break;
            }
            setToast('Selecione um cliente');
            return _context7.a(2);
          case 1:
            if (newOS.scheduled_date) {
              _context7.n = 2;
              break;
            }
            setToast('Data agendada é obrigatória');
            return _context7.a(2);
          case 2:
            _context7.n = 3;
            return api.createOrder({
              customer_id: newOS.customer_id,
              type: newOS.type,
              priority: newOS.priority,
              difficulty: newOS.difficulty || 'MEDIUM',
              status: 'OPEN',
              scheduled_date: newOS.scheduled_date,
              assigned_technician_id: newOS.assigned_technician_id || null,
              additional_technicians: newOS.additional_technicians || [],
              description: newOS.description || null,
              substation: newOS.substation || null,
              city: newOS.city || null
            });
          case 3:
            result = _context7.v;
            if (result.success) {
              setOrders(function (prev) {
                return [result.data].concat(_toConsumableArray(prev));
              });
              setNewModal(false);
              setNewOS({
                customer_id: '',
                type: 'Instalação',
                priority: 'MEDIUM',
                difficulty: 'MEDIUM',
                description: '',
                scheduled_date: '',
                assigned_technician_id: '',
                additional_technicians: [],
                substation: '',
                city: ''
              });
              setToast("OS ".concat(result.data.number, " criada com sucesso!"));
            } else {
              setToast("Erro ao criar OS: ".concat(result.error));
            }
          case 4:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    function createOS() {
      return _createOS.apply(this, arguments);
    }
    return createOS;
  }();
  var filtered = orders.filter(function (o) {
    var _o$customers2;
    return !q || o.number.toLowerCase().includes(q.toLowerCase()) || (((_o$customers2 = o.customers) === null || _o$customers2 === void 0 ? void 0 : _o$customers2.name) || o.customer || '').toLowerCase().includes(q.toLowerCase());
  });
  var byStatus = Object.fromEntries(COLS.map(function (c) {
    return [c.key, filtered.filter(function (o) {
      return o.status === c.key;
    })];
  }));
  var OSCard = function OSCard(_ref25) {
    var _o$customers3, _o$technicians2, _o$technicians3;
    var o = _ref25.o;
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return setSelected(o);
      },
      className: "bg-white rounded-lg p-3 shadow-sm border-l-4 ".concat(PRIORITY_BORDER[o.priority], " cursor-pointer hover:shadow-md transition-shadow")
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between gap-1 mb-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-mono font-bold text-gray-600"
    }, o.number), /*#__PURE__*/React.createElement(PriorityBadge, {
      p: o.priority
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-800 truncate"
    }, ((_o$customers3 = o.customers) === null || _o$customers3 === void 0 ? void 0 : _o$customers3.name) || o.customer), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, o.type), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mt-2 text-xs text-gray-400"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      className: "w-3 h-3"
    }), fmtDate(o.scheduled_date || o.date)), (((_o$technicians2 = o.technicians) === null || _o$technicians2 === void 0 ? void 0 : _o$technicians2.name) || o.tech) && /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1 truncate"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      className: "w-3 h-3"
    }), (((_o$technicians3 = o.technicians) === null || _o$technicians3 === void 0 ? void 0 : _o$technicians3.name) || o.tech || '').split(' ')[0])), o.nf && /*#__PURE__*/React.createElement("div", {
      className: "mt-1.5 text-xs font-mono font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded"
    }, "\uD83E\uDDFE NF ", o.nf.number));
  };

  // Derive current selected from orders state so status stays in sync
  var selOS = selected ? orders.find(function (o) {
    return o.id === selected.id;
  }) || selected : null;
  var flow = selOS ? STATUS_FLOW[selOS.status] : null;
  var btnColors = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    sky: 'bg-sky-600 hover:bg-sky-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-3 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "Buscar OS ou cliente...",
    className: "pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex bg-gray-100 rounded-lg p-0.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('kanban');
    },
    className: "px-3 py-1.5 rounded text-sm font-medium ".concat(view === 'kanban' ? 'bg-white shadow text-gray-800' : 'text-gray-500')
  }, "Kanban"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('list');
    },
    className: "px-3 py-1.5 rounded text-sm font-medium ".concat(view === 'list' ? 'bg-white shadow text-gray-800' : 'text-gray-500')
  }, "Lista")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(true);
    },
    className: "ml-auto flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), " Nova OS")), view === 'kanban' ? /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4 p-5 overflow-x-auto flex-1 items-start"
  }, COLS.map(function (col) {
    var _byStatus$col$key, _byStatus$col$key2, _byStatus$col$key3;
    return /*#__PURE__*/React.createElement("div", {
      key: col.key,
      className: "shrink-0 w-60"
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(col.bg, " ").concat(col.text, " flex items-center justify-between px-3 py-2 rounded-t-lg")
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-semibold"
    }, col.label), /*#__PURE__*/React.createElement("span", {
      className: "bg-white bg-opacity-60 text-xs font-bold px-1.5 py-0.5 rounded-full"
    }, ((_byStatus$col$key = byStatus[col.key]) === null || _byStatus$col$key === void 0 ? void 0 : _byStatus$col$key.length) || 0)), /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-50 border border-gray-200 border-t-0 rounded-b-lg p-2 space-y-2 min-h-24"
    }, (_byStatus$col$key2 = byStatus[col.key]) === null || _byStatus$col$key2 === void 0 ? void 0 : _byStatus$col$key2.map(function (o) {
      return /*#__PURE__*/React.createElement(OSCard, {
        key: o.id,
        o: o
      });
    }), (((_byStatus$col$key3 = byStatus[col.key]) === null || _byStatus$col$key3 === void 0 ? void 0 : _byStatus$col$key3.length) || 0) === 0 && /*#__PURE__*/React.createElement("p", {
      className: "text-center text-xs text-gray-400 py-4"
    }, "Nenhuma OS")));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "p-5 overflow-y-auto flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("tr", null, ['Nº', 'Cliente', 'Cidade', 'Subestação', 'Tipo', 'Prioridade', 'Status', 'Nota Fiscal', 'Agendado', 'Técnico', ''].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      className: "px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, h);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100"
  }, filtered.map(function (o) {
    var _o$customers4, _o$technicians4;
    return /*#__PURE__*/React.createElement("tr", {
      key: o.id,
      className: "hover:bg-gray-50 cursor-pointer",
      onClick: function onClick() {
        return setSelected(o);
      }
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-mono text-xs font-semibold text-gray-700"
    }, o.number), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-800"
    }, ((_o$customers4 = o.customers) === null || _o$customers4 === void 0 ? void 0 : _o$customers4.name) || o.customer), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500"
    }, o.city || '—'), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500 max-w-xs truncate"
    }, o.substation || '—'), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-600"
    }, o.type), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement(PriorityBadge, {
      p: o.priority
    })), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement(Badge, {
      status: o.status
    })), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, o.nf ? /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-xs font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded"
    }, "NF ", o.nf.number) : /*#__PURE__*/React.createElement("span", {
      className: "text-gray-300 text-xs"
    }, "\u2014")), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-600"
    }, fmtDate(o.scheduled_date || o.date)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-600"
    }, ((_o$technicians4 = o.technicians) === null || _o$technicians4 === void 0 ? void 0 : _o$technicians4.name) || o.tech || /*#__PURE__*/React.createElement("span", {
      className: "text-gray-300"
    }, "\u2014")), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("button", {
      className: "text-xs text-blue-600 hover:underline font-medium"
    }, "Abrir \u2192")));
  }))))), /*#__PURE__*/React.createElement(Modal, {
    open: !!selOS,
    onClose: function onClose() {
      return setSelected(null);
    },
    title: (selOS === null || selOS === void 0 ? void 0 : selOS.number) || '',
    size: "lg"
  }, selOS && /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement(Badge, {
    status: selOS.status
  }), /*#__PURE__*/React.createElement(PriorityBadge, {
    p: selOS.priority
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-gray-500"
  }, selOS.type)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement(LabelField, {
    label: "Cliente",
    value: ((_selOS$customers = selOS.customers) === null || _selOS$customers === void 0 ? void 0 : _selOS$customers.name) || selOS.customer || '—'
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Data",
    value: fmtDate(selOS.scheduled_date || selOS.date)
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Cidade",
    value: selOS.city || '—'
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Subesta\xE7\xE3o",
    value: selOS.substation || '—'
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Descri\xE7\xE3o",
    value: selOS.description || selOS.desc || '—'
  }), function () {
    var tr = TAX_REGIMES[taxRegime];
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-50 rounded-xl p-3 border border-gray-100"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2"
    }, "Tributa\xE7\xE3o Aplic\xE1vel"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold px-2 py-0.5 rounded-full ".concat(tr.color)
    }, tr.label)), /*#__PURE__*/React.createElement("div", {
      className: "space-y-1 text-xs text-gray-600"
    }, tr.iss && /*#__PURE__*/React.createElement("p", null, "ISS: ", /*#__PURE__*/React.createElement("span", {
      className: "font-semibold"
    }, (tr.iss * 100).toFixed(0), "%"), " sobre valor da OS"), tr.pis && /*#__PURE__*/React.createElement("p", null, "PIS: ", /*#__PURE__*/React.createElement("span", {
      className: "font-semibold"
    }, (tr.pis * 100).toFixed(2), "%")), tr.cofins && /*#__PURE__*/React.createElement("p", null, "COFINS: ", /*#__PURE__*/React.createElement("span", {
      className: "font-semibold"
    }, (tr.cofins * 100).toFixed(2), "%")), tr.dasRate && /*#__PURE__*/React.createElement("p", null, "DAS (Simples): ", /*#__PURE__*/React.createElement("span", {
      className: "font-semibold"
    }, (tr.dasRate * 100).toFixed(1), "%"))));
  }()), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mb-1"
  }, "T\xE9cnico Respons\xE1vel"), /*#__PURE__*/React.createElement("select", {
    value: selOS.assigned_technician_id || '',
    onChange: function onChange(e) {
      return assignTech(selOS.id, e.target.value || null);
    },
    className: "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Nenhum (n\xE3o atribu\xEDdo)"), technicians.map(function (t) {
    return /*#__PURE__*/React.createElement("option", {
      key: t.id,
      value: t.id
    }, t.name);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3"
  }, "Progresso"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, ['OPEN', 'SCHEDULED', 'IN_TRANSIT', 'IN_PROGRESS', 'COMPLETED', 'INVOICED'].map(function (s) {
    var sMap = {
      OPEN: 'Aberta',
      SCHEDULED: 'Agendada',
      IN_TRANSIT: 'Em Trânsito',
      IN_PROGRESS: 'Em Andamento',
      COMPLETED: 'Concluída',
      INVOICED: 'Faturada'
    };
    var steps = ['OPEN', 'SCHEDULED', 'IN_TRANSIT', 'IN_PROGRESS', 'COMPLETED', 'INVOICED'];
    var currentIdx = steps.indexOf(selOS.status);
    var thisIdx = steps.indexOf(s);
    var done = thisIdx < currentIdx,
      current = s === selOS.status;
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      className: "flex items-center gap-2 text-xs ".concat(current ? 'text-blue-700 font-semibold' : done ? 'text-green-600' : 'text-gray-400')
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-4 h-4 rounded-full flex items-center justify-center text-xs ".concat(current ? 'bg-blue-600 text-white' : done ? 'bg-green-500 text-white' : 'bg-gray-200')
    }, done ? '✓' : thisIdx + 1), sMap[s], current && /*#__PURE__*/React.createElement("span", {
      className: "text-blue-500"
    }, "\u2190 atual"));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2 border-t border-gray-100"
  }, selOS.status === 'CANCELLED' || selOS.status === 'INVOICED' ? /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, selOS.status === 'INVOICED' && selOS.nf ? /*#__PURE__*/React.createElement("div", {
    className: "bg-purple-50 border border-purple-200 rounded-xl px-4 py-3 flex items-center gap-4 flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-purple-600 text-lg"
  }, "\uD83E\uDDFE"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-purple-400 font-medium uppercase tracking-wide"
  }, "Nota Fiscal Emitida"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-purple-800"
  }, "NF ", selOS.nf.number, " \xB7 S\xE9rie ", selOS.nf.series))), selOS.nf.date && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-purple-600"
  }, "Emiss\xE3o: ", fmtDate(selOS.nf.date)), selOS.nf.value && /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-purple-700"
  }, "Valor: ", fmt(Math.round(parseFloat(selOS.nf.value) * 100)))) : /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-center text-gray-400 py-2"
  }, selOS.status === 'INVOICED' ? 'OS finalizada e faturada.' : 'OS cancelada.')) : /*#__PURE__*/React.createElement(React.Fragment, null, flow && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return selOS.status === 'COMPLETED' ? requestInvoice(selOS.id) : advance(selOS.id);
    },
    className: "flex-1 py-2.5 text-white rounded-lg text-sm font-semibold ".concat(btnColors[flow.color] || 'bg-blue-600 hover:bg-blue-700')
  }, flow.label, " \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return cancel(selOS.id);
    },
    className: "px-4 py-2.5 border border-red-200 text-red-600 rounded-lg text-sm hover:bg-red-50"
  }, "Cancelar OS")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _s = orders.find(function(o) { return o.id === (selOS && selOS.id); }) || selOS;
      setEditData({
        id: _s.id,
        type: _s.type,
        priority: _s.priority,
        difficulty: _s.difficulty || 'MEDIUM',
        scheduled_date: _s.scheduled_date || '',
        assigned_technician_id: _s.assigned_technician_id || '',
        additional_technicians: _s.additional_technicians || [],
        substation: _s.substation || '',
        city: _s.city || '',
        description: _s.description || ''
      });
      setEditModal(true);
    },
    className: "px-4 py-2.5 border border-amber-200 text-amber-700 rounded-lg text-sm hover:bg-amber-50"
  }, "Editar OS"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelected(null);
    },
    className: "px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Fechar"))), /*#__PURE__*/React.createElement(Modal, {
    open: editModal,
    onClose: function onClose() {
      setEditModal(false);
      setEditData(null);
    },
    title: "Editar OS " + (editData && editData.id ? (orders.find(function(o){ return o.id === editData.id; }) || {}).number || '' : ''),
    size: "md"
  }, editData && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Cidade"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: editData.city || '',
    onChange: function onChange(e) {
      return setEditData(function(p) { return _objectSpread(_objectSpread({}, p), {}, { city: e.target.value }); });
    },
    placeholder: "Ex: S\xE3o Paulo",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Subesta\xE7\xE3o / Local"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: editData.substation || '',
    onChange: function onChange(e) {
      return setEditData(function(p) { return _objectSpread(_objectSpread({}, p), {}, { substation: e.target.value }); });
    },
    placeholder: "Ex: SE Norte",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Descri\xE7\xE3o"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: editData.description || '',
    onChange: function onChange(e) {
      return setEditData(function(p) { return _objectSpread(_objectSpread({}, p), {}, { description: e.target.value }); });
    },
    placeholder: "Descreva o servi\xE7o...",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Data Agendada"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: editData.scheduled_date || '',
    onChange: function onChange(e) {
      return setEditData(function(p) { return _objectSpread(_objectSpread({}, p), {}, { scheduled_date: e.target.value }); });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "T\xE9cnico Respons\xE1vel"), /*#__PURE__*/React.createElement("select", {
    value: editData.assigned_technician_id || '',
    onChange: function onChange(e) {
      return setEditData(function(p) { return _objectSpread(_objectSpread({}, p), {}, { assigned_technician_id: e.target.value }); });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", { value: "" }, "N\xE3o atribu\xEDdo"), technicians.map(function(t) {
    return /*#__PURE__*/React.createElement("option", { key: t.id, value: t.id }, t.name);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Dificuldade"), /*#__PURE__*/React.createElement("select", {
    value: editData.difficulty || 'MEDIUM',
    onChange: function onChange(e) {
      return setEditData(function(p) { return _objectSpread(_objectSpread({}, p), {}, { difficulty: e.target.value }); });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", { value: "EASY" }, "F\xE1cil"), /*#__PURE__*/React.createElement("option", { value: "MEDIUM" }, "M\xE9dia"), /*#__PURE__*/React.createElement("option", { value: "HARD" }, "Dif\xEDcil"), /*#__PURE__*/React.createElement("option", { value: "VERY_HARD" }, "Muito Dif\xEDcil")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "T\xE9cnicos Adicionais"), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-lg p-2 max-h-28 overflow-y-auto space-y-1"
  }, technicians.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 py-1"
  }, "Nenhum t\xE9cnico cadastrado") : technicians.map(function(t) {
    var checked_edit = (editData.additional_technicians || []).includes(t.id);
    return /*#__PURE__*/React.createElement("label", {
      key: t.id,
      className: "flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-1 py-0.5 rounded text-sm"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked_edit,
      onChange: function onChange() {
        return setEditData(function(p) {
          var list = p.additional_technicians || [];
          return _objectSpread(_objectSpread({}, p), {}, {
            additional_technicians: checked_edit ? list.filter(function(id) { return id !== t.id; }) : [].concat(_toConsumableArray(list), [t.id])
          });
        });
      },
      className: "accent-amber-500 w-3.5 h-3.5"
    }), t.name);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Tipo"), /*#__PURE__*/React.createElement("select", {
    value: editData.type || 'Instala\xE7\xE3o',
    onChange: function onChange(e) {
      return setEditData(function(p) { return _objectSpread(_objectSpread({}, p), {}, { type: e.target.value }); });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, ['Instalação', 'Manutenção', 'Revisão', 'Emergência'].map(function(t) {
    return /*#__PURE__*/React.createElement("option", { key: t }, t);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Prioridade"), /*#__PURE__*/React.createElement("select", {
    value: editData.priority || 'MEDIUM',
    onChange: function onChange(e) {
      return setEditData(function(p) { return _objectSpread(_objectSpread({}, p), {}, { priority: e.target.value }); });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", { value: "LOW" }, "Baixa"), /*#__PURE__*/React.createElement("option", { value: "MEDIUM" }, "M\xE9dia"), /*#__PURE__*/React.createElement("option", { value: "HIGH" }, "Alta"), /*#__PURE__*/React.createElement("option", { value: "URGENT" }, "Urgente")))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setEditModal(false);
      setEditData(null);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: saveEditOS,
    className: "flex-1 py-2.5 bg-amber-500 text-white rounded-lg text-sm font-medium hover:bg-amber-600"
  }, "Salvar Altera\xE7\xF5es"))))), /*#__PURE__*/React.createElement(Modal, {
    open: newModal,
    onClose: function onClose() {
      return setNewModal(false);
    },
    title: "Nova Ordem de Servi\xE7o",
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Cliente *"), /*#__PURE__*/React.createElement("select", {
    value: newOS.customer_id,
    onChange: function onChange(e) {
      return setNewOS(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          customer_id: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione o cliente..."), customers.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.name);
  }))), [{
    label: 'Cidade',
    key: 'city',
    type: 'text',
    placeholder: 'Ex: São José do Rio Preto'
  }, {
    label: 'Subestação / Local',
    key: 'substation',
    type: 'text',
    placeholder: 'Ex: SE Cliente — Sala de Energia'
  }, {
    label: 'Descrição',
    key: 'description',
    type: 'text',
    placeholder: 'Descreva o serviço...'
  }, {
    label: 'Data Agendada *',
    key: 'scheduled_date',
    type: 'date',
    placeholder: ''
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.key
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.label), /*#__PURE__*/React.createElement("input", {
      type: f.type,
      value: newOS[f.key],
      onChange: function onChange(e) {
        return setNewOS(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
        });
      },
      placeholder: f.placeholder,
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "T\xE9cnico Respons\xE1vel"), /*#__PURE__*/React.createElement("select", {
    value: newOS.assigned_technician_id,
    onChange: function onChange(e) {
      return setNewOS(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          assigned_technician_id: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "N\xE3o atribu\xEDdo"), technicians.map(function (t) {
    return /*#__PURE__*/React.createElement("option", {
      key: t.id,
      value: t.id
    }, t.name);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Dificuldade"), /*#__PURE__*/React.createElement("select", {
    value: newOS.difficulty,
    onChange: function onChange(e) {
      return setNewOS(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          difficulty: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "EASY"
  }, "F\xE1cil"), /*#__PURE__*/React.createElement("option", {
    value: "MEDIUM"
  }, "M\xE9dia"), /*#__PURE__*/React.createElement("option", {
    value: "HARD"
  }, "Dif\xEDcil"), /*#__PURE__*/React.createElement("option", {
    value: "VERY_HARD"
  }, "Muito Dif\xEDcil")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "T\xE9cnicos Adicionais"), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-lg p-2 max-h-28 overflow-y-auto space-y-1"
  }, technicians.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 py-1"
  }, "Nenhum t\xE9cnico cadastrado") : technicians.map(function (t) {
    var checked_add = (newOS.additional_technicians || []).includes(t.id);
    return /*#__PURE__*/React.createElement("label", {
      key: t.id,
      className: "flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-1 py-0.5 rounded text-sm"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked_add,
      onChange: function onChange() {
        return setNewOS(function (p) {
          var list = p.additional_technicians || [];
          return _objectSpread(_objectSpread({}, p), {}, {
            additional_technicians: checked_add ? list.filter(function (id) { return id !== t.id; }) : [].concat(_toConsumableArray(list), [t.id])
          });
        });
      },
      className: "accent-blue-600 w-3.5 h-3.5"
    }), t.name);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Tipo"), /*#__PURE__*/React.createElement("select", {
    value: newOS.type,
    onChange: function onChange(e) {
      return setNewOS(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          type: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, ['Instalação', 'Manutenção', 'Revisão', 'Emergência'].map(function (t) {
    return /*#__PURE__*/React.createElement("option", {
      key: t
    }, t);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Prioridade"), /*#__PURE__*/React.createElement("select", {
    value: newOS.priority,
    onChange: function onChange(e) {
      return setNewOS(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          priority: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "LOW"
  }, "Baixa"), /*#__PURE__*/React.createElement("option", {
    value: "MEDIUM"
  }, "M\xE9dia"), /*#__PURE__*/React.createElement("option", {
    value: "HIGH"
  }, "Alta"), /*#__PURE__*/React.createElement("option", {
    value: "URGENT"
  }, "Urgente")))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(false);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: createOS,
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Criar OS")))), /*#__PURE__*/React.createElement(Modal, {
    open: nfModal,
    onClose: function onClose() {
      return setNfModal(false);
    },
    title: "Emitir Nota Fiscal",
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-purple-50 border border-purple-200 rounded-xl p-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-purple-500 text-lg"
  }, "\uD83E\uDDFE"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-purple-700 font-medium"
  }, "Informe os dados da NF antes de faturar a OS. O n\xFAmero ficar\xE1 vinculado permanentemente ao registro.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "N\xFAmero da NF *"), /*#__PURE__*/React.createElement("input", {
    value: nfData.number,
    onChange: function onChange(e) {
      return setNfData(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          number: e.target.value
        });
      });
    },
    placeholder: "Ex: 000123",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "S\xE9rie"), /*#__PURE__*/React.createElement("input", {
    value: nfData.series,
    onChange: function onChange(e) {
      return setNfData(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          series: e.target.value
        });
      });
    },
    placeholder: "1",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Data de Emiss\xE3o"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: nfData.date,
    onChange: function onChange(e) {
      return setNfData(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          date: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Valor da NF (R$)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: nfData.value,
    onChange: function onChange(e) {
      return setNfData(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          value: e.target.value
        });
      });
    },
    placeholder: "0,00",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2 border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNfModal(false);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: confirmInvoice,
    disabled: !nfData.number.trim(),
    className: "flex-1 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors ".concat(nfData.number.trim() ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-300 cursor-not-allowed')
  }, "Faturar OS \u2014 NF ", nfData.number || '—')))), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast,
    onClose: function onClose() {
      return setToast(null);
    }
  }));
};

// ─── CUSTOMERS ────────────────────────────────────────────────────────────────

var CustomersPage = function CustomersPage(_ref26) {
  var setPage = _ref26.setPage;
  var _useState63 = useState([]),
    _useState64 = _slicedToArray(_useState63, 2),
    customers = _useState64[0],
    setCustomers = _useState64[1];
  var _useState65 = useState(true),
    _useState66 = _slicedToArray(_useState65, 2),
    loading = _useState66[0],
    setLoading = _useState66[1];
  var _useState67 = useState(''),
    _useState68 = _slicedToArray(_useState67, 2),
    q = _useState68[0],
    setQ = _useState68[1];
  var _useState69 = useState('all'),
    _useState70 = _slicedToArray(_useState69, 2),
    typeF = _useState70[0],
    setTypeF = _useState70[1];
  var _useState71 = useState(null),
    _useState72 = _slicedToArray(_useState71, 2),
    selected = _useState72[0],
    setSelected = _useState72[1];
  var _useState73 = useState(false),
    _useState74 = _slicedToArray(_useState73, 2),
    newModal = _useState74[0],
    setNewModal = _useState74[1];
  var _useState75 = useState(null),
    _useState76 = _slicedToArray(_useState75, 2),
    toast = _useState76[0],
    setToast = _useState76[1];
  var _useState77 = useState({
      name: '',
      type: 'PJ',
      doc: '',
      city: '',
      phone: '',
      email: '',
      active: true
    }),
    _useState78 = _slicedToArray(_useState77, 2),
    form = _useState78[0],
    setForm = _useState78[1];

  // Carregar clientes da API
  useEffect(function () {
    loadCustomers();
  }, []);
  var loadCustomers = /*#__PURE__*/function () {
    var _loadCustomers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var result, _result$data2;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            setLoading(true);
            _context8.n = 1;
            return api.getCustomers();
          case 1:
            result = _context8.v;
            if (result.success) {
              setCustomers(((_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.data) || result.data || []);
            } else {
              setCustomers([]);
            }
            setLoading(false);
          case 2:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    function loadCustomers() {
      return _loadCustomers.apply(this, arguments);
    }
    return loadCustomers;
  }();
  var list = customers.filter(function (c) {
    return (!q || c.name.toLowerCase().includes(q.toLowerCase()) || c.doc.includes(q)) && (typeF === 'all' || c.type === typeF);
  });
  var create = /*#__PURE__*/function () {
    var _create = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var result;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            if (form.name) {
              _context9.n = 1;
              break;
            }
            setToast('Nome é obrigatório');
            return _context9.a(2);
          case 1:
            if (form.doc) {
              _context9.n = 2;
              break;
            }
            setToast('CPF/CNPJ é obrigatório');
            return _context9.a(2);
          case 2:
            _context9.n = 3;
            return api.createCustomer(form);
          case 3:
            result = _context9.v;
            if (result.success) {
              setCustomers(function (p) {
                return [result.data].concat(_toConsumableArray(p));
              });
              setNewModal(false);
              setForm({
                name: '',
                type: 'PJ',
                doc: '',
                city: '',
                phone: '',
                email: '',
                active: true
              });
              setToast("Cliente ".concat(form.name, " cadastrado com sucesso!"));
            } else {
              setToast("Erro ao criar cliente: ".concat(result.error));
            }
          case 4:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    function create() {
      return _create.apply(this, arguments);
    }
    return create;
  }();
  var toggleActive = /*#__PURE__*/function () {
    var _toggleActive = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(id) {
      var customer, result;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            customer = customers.find(function (c) {
              return c.id === id;
            });
            if (customer) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2);
          case 1:
            _context0.n = 2;
            return api.updateCustomer(id, {
              active: !customer.active
            });
          case 2:
            result = _context0.v;
            if (result.success) {
              setCustomers(function (p) {
                return p.map(function (c) {
                  return c.id === id ? result.data : c;
                });
              });
              setSelected(function (p) {
                return (p === null || p === void 0 ? void 0 : p.id) === id ? result.data : p;
              });
            } else {
              setToast("Erro ao atualizar cliente: ".concat(result.error));
            }
          case 3:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    function toggleActive(_x8) {
      return _toggleActive.apply(this, arguments);
    }
    return toggleActive;
  }();
  var sel = selected ? customers.find(function (c) {
    return c.id === selected.id;
  }) || selected : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "p-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "Nome ou documento...",
    className: "pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("select", {
    value: typeF,
    onChange: function onChange(e) {
      return setTypeF(e.target.value);
    },
    className: "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "Todos"), /*#__PURE__*/React.createElement("option", {
    value: "PJ"
  }, "Pessoa Jur\xEDdica"), /*#__PURE__*/React.createElement("option", {
    value: "PF"
  }, "Pessoa F\xEDsica")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(true);
    },
    className: "ml-auto flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), " Novo Cliente")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("tr", null, ['Tipo', 'Nome', 'Documento', 'Cidade', 'Contratos', 'OS Abertas', 'Faturamento', 'Status', ''].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      className: "px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, h);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100"
  }, list.map(function (c) {
    return /*#__PURE__*/React.createElement("tr", {
      key: c.id,
      className: "hover:bg-gray-50 cursor-pointer",
      onClick: function onClick() {
        return setSelected(c);
      }
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ".concat(c.type === 'PJ' ? 'bg-indigo-50 text-indigo-600' : 'bg-teal-50 text-teal-600')
    }, c.type)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-gray-800"
    }, c.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, c.email)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-mono text-xs text-gray-500"
    }, c.doc), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-600"
    }, c.city || '—'), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-center text-gray-700"
    }, c.contracts), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold ".concat(c.openOS > 0 ? 'text-orange-600' : 'text-gray-400')
    }, c.openOS)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-medium text-gray-800"
    }, fmt(c.revenue)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement(Badge, {
      status: c.active ? 'ACTIVE' : 'INACTIVE'
    })), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("button", {
      className: "text-xs text-blue-600 hover:underline font-medium"
    }, "Detalhes \u2192")));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2.5 bg-gray-50 border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500"
  }, list.length, " clientes encontrados"))), /*#__PURE__*/React.createElement(Modal, {
    open: !!sel,
    onClose: function onClose() {
      return setSelected(null);
    },
    title: (sel === null || sel === void 0 ? void 0 : sel.name) || '',
    size: "lg"
  }, sel && /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold ".concat(sel.type === 'PJ' ? 'bg-indigo-50 text-indigo-600' : 'bg-teal-50 text-teal-600')
  }, sel.type), /*#__PURE__*/React.createElement(Badge, {
    status: sel.active ? 'ACTIVE' : 'INACTIVE'
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement(LabelField, {
    label: "Documento",
    value: sel.doc
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Cidade",
    value: sel.city
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    className: "w-4 h-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:".concat(sel.phone),
    className: "text-sm text-blue-600"
  }, sel.phone || '—')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    className: "w-4 h-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:".concat(sel.email),
    className: "text-sm text-blue-600"
  }, sel.email || '—'))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 rounded-xl p-4 grid grid-cols-3 gap-3 text-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold text-gray-800"
  }, sel.contracts), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Contratos")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold ".concat(sel.openOS > 0 ? 'text-orange-600' : 'text-gray-800')
  }, sel.openOS), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "OS Abertas")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-gray-800"
  }, fmt(sel.revenue)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Faturamento"))))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2 border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setSelected(null);
      setPage('orders');
    },
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
  }, "Nova OS para este cliente"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setSelected(null);
      setPage('contracts');
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Ver Contratos"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toggleActive(sel.id);
    },
    className: "px-4 py-2.5 border rounded-lg text-sm ".concat(sel.active ? 'border-red-200 text-red-600 hover:bg-red-50' : 'border-green-200 text-green-600 hover:bg-green-50')
  }, sel.active ? 'Inativar' : 'Ativar')))), /*#__PURE__*/React.createElement(Modal, {
    open: newModal,
    onClose: function onClose() {
      return setNewModal(false);
    },
    title: "Novo Cliente",
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, [['PJ', 'Pessoa Jurídica'], ['PF', 'Pessoa Física']].map(function (_ref27) {
    var _ref28 = _slicedToArray(_ref27, 2),
      v = _ref28[0],
      l = _ref28[1];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            type: v
          });
        });
      },
      className: "flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ".concat(form.type === v ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50')
    }, l);
  })), [{
    label: 'Nome / Razão Social *',
    key: 'name',
    placeholder: 'Ex: Empresa XYZ Ltda'
  }, {
    label: form.type === 'PJ' ? 'CNPJ *' : 'CPF *',
    key: 'doc',
    placeholder: form.type === 'PJ' ? '00.000.000/0001-00' : '000.000.000-00'
  }, {
    label: 'Cidade',
    key: 'city',
    placeholder: 'Ex: São José do Rio Preto'
  }, {
    label: 'Telefone',
    key: 'phone',
    placeholder: '(17) 99999-0000'
  }, {
    label: 'E-mail',
    key: 'email',
    placeholder: 'contato@empresa.com.br'
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.key
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.label), /*#__PURE__*/React.createElement("input", {
      value: form[f.key],
      onChange: function onChange(e) {
        return setForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
        });
      },
      placeholder: f.placeholder,
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(false);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: create,
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Cadastrar Cliente")))), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast,
    onClose: function onClose() {
      return setToast(null);
    }
  }));
};

// ─── CONTRACTS ────────────────────────────────────────────────────────────────

var ContractTypeName = {
  MONTHLY: 'Mensal',
  QUARTERLY: 'Trimestral',
  ANNUAL: 'Anual',
  ON_DEMAND: 'Avulso'
};
var ContractsPage = function ContractsPage(_ref29) {
  var _sel$customers;
  var _ref29$taxRegime = _ref29.taxRegime,
    taxRegime = _ref29$taxRegime === void 0 ? 'REAL' : _ref29$taxRegime;
  var _useState79 = useState([]),
    _useState80 = _slicedToArray(_useState79, 2),
    contracts = _useState80[0],
    setContracts = _useState80[1];
  var _useState81 = useState([]),
    _useState82 = _slicedToArray(_useState81, 2),
    customers = _useState82[0],
    setCustomers = _useState82[1];
  var _useState83 = useState(true),
    _useState84 = _slicedToArray(_useState83, 2),
    loading = _useState84[0],
    setLoading = _useState84[1];
  var _useState85 = useState(''),
    _useState86 = _slicedToArray(_useState85, 2),
    q = _useState86[0],
    setQ = _useState86[1];
  useEffect(function () {
    loadContracts();
  }, []);
  var loadContracts = /*#__PURE__*/function () {
    var _loadContracts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var _cRes$data, _custRes$data2;
      var _yield$Promise$all3, _yield$Promise$all4, cRes, custRes;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            setLoading(true);
            _context1.n = 1;
            return Promise.all([api.getContracts(), api.getCustomers()]);
          case 1:
            _yield$Promise$all3 = _context1.v;
            _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
            cRes = _yield$Promise$all4[0];
            custRes = _yield$Promise$all4[1];
            if (cRes.success) setContracts(((_cRes$data = cRes.data) === null || _cRes$data === void 0 ? void 0 : _cRes$data.data) || cRes.data || []);
            if (custRes.success) setCustomers(((_custRes$data2 = custRes.data) === null || _custRes$data2 === void 0 ? void 0 : _custRes$data2.data) || custRes.data || []);
            setLoading(false);
          case 2:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    function loadContracts() {
      return _loadContracts.apply(this, arguments);
    }
    return loadContracts;
  }();
  var _useState87 = useState(null),
    _useState88 = _slicedToArray(_useState87, 2),
    selected = _useState88[0],
    setSelected = _useState88[1];
  var _useState89 = useState(false),
    _useState90 = _slicedToArray(_useState89, 2),
    newModal = _useState90[0],
    setNewModal = _useState90[1];
  var _useState91 = useState(null),
    _useState92 = _slicedToArray(_useState91, 2),
    toast = _useState92[0],
    setToast = _useState92[1];
  var _useState93 = useState({
      customer_id: '',
      type: 'MONTHLY',
      value: '',
      start_date: '',
      end_date: '',
      sla_hours: '24'
    }),
    _useState94 = _slicedToArray(_useState93, 2),
    form = _useState94[0],
    setForm = _useState94[1];
  var list = contracts.filter(function (c) {
    var _c$customers;
    return !q || c.number.toLowerCase().includes(q.toLowerCase()) || (((_c$customers = c.customers) === null || _c$customers === void 0 ? void 0 : _c$customers.name) || '').toLowerCase().includes(q.toLowerCase());
  });
  var totalActive = contracts.filter(function (c) {
    return c.status === 'ACTIVE';
  }).reduce(function (s, c) {
    return s + c.value;
  }, 0);
  var expiring = contracts.filter(function (c) {
    return c.status === 'ACTIVE';
  }).length;
  var in30 = new Date();
  in30.setDate(in30.getDate() + 30);
  var expiringList = contracts.filter(function (c) {
    return c.status === 'ACTIVE' && c.end_date && new Date(c.end_date) <= in30;
  });
  var expiringKpiVal = expiringList.length ? "".concat(expiringList.length, " contrato").concat(expiringList.length > 1 ? 's' : '') : 'Nenhum';
  var expiringKpiSub = expiringList.length ? expiringList[0].number : 'próximos 30 dias';
  var create = /*#__PURE__*/function () {
    var _create2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var result;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            if (form.customer_id) {
              _context10.n = 1;
              break;
            }
            setToast('Selecione um cliente');
            return _context10.a(2);
          case 1:
            if (!(!form.value || isNaN(parseFloat(form.value)) || parseFloat(form.value) <= 0)) {
              _context10.n = 2;
              break;
            }
            setToast('Informe um valor válido');
            return _context10.a(2);
          case 2:
            if (!(!form.start_date || !form.end_date)) {
              _context10.n = 3;
              break;
            }
            setToast('Datas de início e fim são obrigatórias');
            return _context10.a(2);
          case 3:
            _context10.n = 4;
            return api.createContract({
              customer_id: form.customer_id,
              type: form.type,
              value: Math.round(parseFloat(form.value) * 100),
              start_date: form.start_date,
              end_date: form.end_date,
              sla_hours: parseInt(form.sla_hours) || 24,
              status: 'ACTIVE'
            });
          case 4:
            result = _context10.v;
            if (result.success) {
              setContracts(function (p) {
                return [result.data].concat(_toConsumableArray(p));
              });
              setNewModal(false);
              setForm({
                customer_id: '',
                type: 'MONTHLY',
                value: '',
                start_date: '',
                end_date: '',
                sla_hours: '24'
              });
              setToast("Contrato ".concat(result.data.number, " criado com sucesso!"));
            } else {
              setToast("Erro ao criar contrato: ".concat(result.error));
            }
          case 5:
            return _context10.a(2);
        }
      }, _callee10);
    }));
    function create() {
      return _create2.apply(this, arguments);
    }
    return create;
  }();
  var suspend = /*#__PURE__*/function () {
    var _suspend = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(id) {
      var result;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            _context11.n = 1;
            return api.updateContract(id, {
              status: 'SUSPENDED'
            });
          case 1:
            result = _context11.v;
            if (result.success) {
              setContracts(function (p) {
                return p.map(function (c) {
                  return c.id === id ? _objectSpread(_objectSpread({}, c), {}, {
                    status: 'SUSPENDED'
                  }) : c;
                });
              });
              setSelected(null);
              setToast('Contrato suspenso.');
            } else setToast("Erro: ".concat(result.error));
          case 2:
            return _context11.a(2);
        }
      }, _callee11);
    }));
    function suspend(_x9) {
      return _suspend.apply(this, arguments);
    }
    return suspend;
  }();
  var activate = /*#__PURE__*/function () {
    var _activate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(id) {
      var result;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            _context12.n = 1;
            return api.updateContract(id, {
              status: 'ACTIVE'
            });
          case 1:
            result = _context12.v;
            if (result.success) {
              setContracts(function (p) {
                return p.map(function (c) {
                  return c.id === id ? _objectSpread(_objectSpread({}, c), {}, {
                    status: 'ACTIVE'
                  }) : c;
                });
              });
              setSelected(null);
              setToast('Contrato reativado!');
            } else setToast("Erro: ".concat(result.error));
          case 2:
            return _context12.a(2);
        }
      }, _callee12);
    }));
    function activate(_x0) {
      return _activate.apply(this, arguments);
    }
    return activate;
  }();
  var sel = selected ? contracts.find(function (c) {
    return c.id === selected.id;
  }) || selected : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "p-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement(KPI, {
    title: "Contratos Ativos",
    value: expiring,
    sub: "na carteira",
    icon: "contracts",
    color: "blue"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "MRR Total",
    value: fmt(totalActive),
    sub: "Receita recorrente",
    icon: "financial",
    color: "green"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "Expirando em 30d",
    value: expiringKpiVal,
    sub: expiringKpiSub,
    icon: "audit",
    color: "orange"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "N\xBA ou cliente...",
    className: "pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(true);
    },
    className: "ml-auto flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), " Novo Contrato")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("tr", null, ['Número', 'Cliente', 'Tipo', 'Valor/Ciclo', 'SLA', 'Vigência', 'Status', ''].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      className: "px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, h);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100"
  }, list.map(function (c) {
    var _c$customers2;
    return /*#__PURE__*/React.createElement("tr", {
      key: c.id,
      className: "hover:bg-gray-50 cursor-pointer",
      onClick: function onClick() {
        return setSelected(c);
      }
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-mono text-xs font-semibold text-gray-700"
    }, c.number), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-medium text-gray-800"
    }, ((_c$customers2 = c.customers) === null || _c$customers2 === void 0 ? void 0 : _c$customers2.name) || c.customer || '—'), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-600"
    }, ContractTypeName[c.type]), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-medium text-gray-800"
    }, fmt(c.value)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-600"
    }, c.sla_hours || c.sla || '—', "h"), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500"
    }, fmtDate(c.start_date || c.start), " \u2192 ", fmtDate(c.end_date || c.end)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement(Badge, {
      status: c.status
    })), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("button", {
      className: "text-xs text-blue-600 hover:underline font-medium"
    }, "Abrir \u2192")));
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: !!sel,
    onClose: function onClose() {
      return setSelected(null);
    },
    title: (sel === null || sel === void 0 ? void 0 : sel.number) || '',
    size: "md"
  }, sel && /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement(Badge, {
    status: sel.status
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement(LabelField, {
    label: "Cliente",
    value: ((_sel$customers = sel.customers) === null || _sel$customers === void 0 ? void 0 : _sel$customers.name) || sel.customer || '—'
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Tipo",
    value: ContractTypeName[sel.type]
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Valor/Ciclo",
    value: fmt(sel.value)
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "SLA",
    value: "".concat(sel.sla_hours || sel.sla || '—', "h")
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "In\xEDcio",
    value: fmtDate(sel.start_date || sel.start)
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Encerramento",
    value: fmtDate(sel.end_date || sel.end)
  })), function () {
    var tr = TAX_REGIMES[taxRegime];
    var iss = tr.iss ? Math.round(sel.value * tr.iss) : null;
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-50 rounded-xl p-4 border border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, "Carga Tribut\xE1ria"), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold px-2 py-0.5 rounded-full ".concat(tr.color)
    }, tr.label)), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3 text-xs"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "Valor Bruto/Ciclo"), /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-gray-800 mt-0.5"
    }, fmt(sel.value))), iss && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "ISS (", (tr.iss * 100).toFixed(0), "%)"), /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-red-600 mt-0.5"
    }, "(", fmt(iss), ")")), tr.pis && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "PIS (", (tr.pis * 100).toFixed(2), "%)"), /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-red-600 mt-0.5"
    }, "(", fmt(Math.round(sel.value * tr.pis)), ")")), tr.cofins && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "COFINS (", (tr.cofins * 100).toFixed(2), "%)"), /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-red-600 mt-0.5"
    }, "(", fmt(Math.round(sel.value * tr.cofins)), ")")), tr.dasRate && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "DAS (", (tr.dasRate * 100).toFixed(1), "%)"), /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-red-600 mt-0.5"
    }, "(", fmt(Math.round(sel.value * tr.dasRate)), ")")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "Valor L\xEDquido Est."), /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-green-700 mt-0.5"
    }, fmt(sel.value - (iss || 0) - (tr.pis ? Math.round(sel.value * tr.pis) : 0) - (tr.cofins ? Math.round(sel.value * tr.cofins) : 0) - (tr.dasRate ? Math.round(sel.value * tr.dasRate) : 0))))));
  }(), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2 border-t border-gray-100"
  }, sel.status === 'ACTIVE' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return suspend(sel.id);
    },
    className: "flex-1 py-2.5 border border-amber-300 text-amber-700 rounded-lg text-sm hover:bg-amber-50"
  }, "Suspender"), sel.status === 'SUSPENDED' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return activate(sel.id);
    },
    className: "flex-1 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
  }, "Reativar"), /*#__PURE__*/React.createElement("button", {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var addYear, result;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.n) {
          case 0:
            addYear = function addYear(d) {
              return d ? new Date(new Date(d).setFullYear(new Date(d).getFullYear() + 1)).toISOString().split('T')[0] : null;
            };
            _context13.n = 1;
            return api.createContract({
              customer_id: sel.customer_id,
              type: sel.type,
              value: sel.value,
              start_date: addYear(sel.start_date || sel.start),
              end_date: addYear(sel.end_date || sel.end),
              sla_hours: sel.sla_hours || sel.sla,
              status: 'ACTIVE'
            });
          case 1:
            result = _context13.v;
            if (result.success) {
              setContracts(function (p) {
                return [result.data].concat(_toConsumableArray(p));
              });
              setSelected(null);
              setToast("Contrato renovado: ".concat(result.data.number));
            } else {
              setToast(result.error || 'Erro ao renovar contrato');
            }
          case 2:
            return _context13.a(2);
        }
      }, _callee13);
    })),
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Renovar Contrato"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelected(null);
    },
    className: "px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Fechar")))), /*#__PURE__*/React.createElement(Modal, {
    open: newModal,
    onClose: function onClose() {
      return setNewModal(false);
    },
    title: "Novo Contrato",
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Cliente *"), /*#__PURE__*/React.createElement("select", {
    value: form.customer_id,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          customer_id: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione o cliente..."), customers.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.name);
  }))), [{
    label: 'Valor (R$) *',
    key: 'value',
    placeholder: '0,00',
    type: 'number'
  }, {
    label: 'SLA (horas)',
    key: 'sla_hours',
    placeholder: '24',
    type: 'number'
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.key
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.label), /*#__PURE__*/React.createElement("input", {
      type: f.type || 'text',
      value: form[f.key],
      onChange: function onChange(e) {
        return setForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
        });
      },
      placeholder: f.placeholder,
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }));
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Tipo"), /*#__PURE__*/React.createElement("select", {
    value: form.type,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          type: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "MONTHLY"
  }, "Mensal"), /*#__PURE__*/React.createElement("option", {
    value: "QUARTERLY"
  }, "Trimestral"), /*#__PURE__*/React.createElement("option", {
    value: "ANNUAL"
  }, "Anual"), /*#__PURE__*/React.createElement("option", {
    value: "ON_DEMAND"
  }, "Avulso"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "In\xEDcio *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: form.start_date,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          start_date: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Encerramento *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: form.end_date,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          end_date: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(false);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: create,
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Criar Contrato")))), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast,
    onClose: function onClose() {
      return setToast(null);
    }
  }));
};

// ─── FINANCIAL ────────────────────────────────────────────────────────────────

var INCOME_CATS_INIT = ['Receita de Contratos', 'Receita de OS', 'Multas e Juros', 'Adiantamentos', 'Outros Recebimentos'];
var EXPENSE_CATS_INIT = ['Pessoal', 'Material', 'Combustível', 'Administrativo', 'Manutenção', 'Telecomunicações', 'Impostos', 'Outros'];
var BANK_ACCOUNTS_INIT = [{
  id: 1,
  bank: 'Bradesco',
  agency: '0001-9',
  account: '12345-6',
  type: 'Corrente',
  balance: 8500000,
  active: true
}, {
  id: 2,
  bank: 'Itaú',
  agency: '0042-7',
  account: '98765-4',
  type: 'Corrente',
  balance: 4000000,
  active: true
}, {
  id: 3,
  bank: 'Caixa',
  agency: '0071-3',
  account: '00123-0',
  type: 'Poupança',
  balance: 150000,
  active: false
}];
var PAYMENT_METHODS_INIT = [{
  id: 1,
  name: 'PIX',
  active: true
}, {
  id: 2,
  name: 'Boleto Bancário',
  active: true
}, {
  id: 3,
  name: 'TED / DOC',
  active: true
}, {
  id: 4,
  name: 'Cartão de Crédito',
  active: false
}, {
  id: 5,
  name: 'Cheque',
  active: false
}, {
  id: 6,
  name: 'Dinheiro / Espécie',
  active: false
}];

// ─── REGIMES TRIBUTÁRIOS ───────────────────────────────────────────────────────
var TAX_REGIMES = {
  REAL: {
    label: 'Lucro Real',
    short: 'L. Real',
    color: 'bg-blue-100 text-blue-800',
    dot: 'bg-blue-500',
    iss: 0.05,
    pis: 0.0165,
    cofins: 0.076,
    irpjRate: 0.15,
    adicIRPJ: 0.10,
    csllRate: 0.09,
    method: 'Lucro efetivo apurado contabilmente.',
    obligation: 'Obrigatório acima de R$ 78M/ano',
    obColor: 'bg-red-50 text-red-700',
    pisLabel: 'PIS — 1,65% (não-cumulativo)',
    cofinsLabel: 'COFINS — 7,60% (não-cumulativo)',
    irpjLabel: 'IRPJ s/ Lucro Real (15% + Adic. 10%)',
    csllLabel: 'CSLL s/ Lucro Real (9%)',
    dre26: {
      pisv: -628600,
      cofinsv: -3158400,
      totalDed: -6740400,
      rl: 41659600,
      ebit: 10909600,
      ebitda: 11709600,
      lair: 10304600,
      irpj: -2570150,
      csll: -927414,
      totalImp: -3497564,
      ll: 6807036
    },
    dre25: {
      pisv: -534000,
      cofinsv: -2681200,
      totalDed: -5861200,
      rl: 35438800,
      ebit: 7858800,
      ebitda: 8563800,
      lair: 7383800,
      irpj: -2088000,
      csll: -664542,
      totalImp: -2752542,
      ll: 4631258
    }
  },
  PRESUMIDO: {
    label: 'Lucro Presumido',
    short: 'L. Presumido',
    color: 'bg-amber-100 text-amber-800',
    dot: 'bg-amber-500',
    iss: 0.05,
    pis: 0.0065,
    cofins: 0.03,
    irpjRate: 0.15,
    adicIRPJ: 0.10,
    csllRate: 0.09,
    presumBase: 0.32,
    method: 'Base de cálculo presumida de 32% da receita bruta.',
    obligation: 'Permitido até R$ 78M/ano',
    obColor: 'bg-amber-50 text-amber-700',
    pisLabel: 'PIS — 0,65% (cumulativo)',
    cofinsLabel: 'COFINS — 3,00% (cumulativo)',
    irpjLabel: 'IRPJ s/ Base Presumida 32% (15% + Adic. 10%)',
    csllLabel: 'CSLL s/ Base Presumida 32% (9%)',
    dre26: {
      pisv: -314600,
      cofinsv: -1452000,
      totalDed: -4720000,
      rl: 43680000,
      ebit: 12930000,
      ebitda: 13730000,
      lair: 12325000,
      irpj: -3866000,
      csll: -1393920,
      totalImp: -5259920,
      ll: 7065080
    },
    dre25: {
      pisv: -268450,
      cofinsv: -1239000,
      totalDed: -4010000,
      rl: 37290000,
      ebit: 10395000,
      ebitda: 11100000,
      lair: 9920000,
      irpj: -3317440,
      csll: -1193760,
      totalImp: -4511200,
      ll: 5408800
    }
  },
  SIMPLES: {
    label: 'Simples Nacional',
    short: 'Simples',
    color: 'bg-green-100 text-green-800',
    dot: 'bg-green-500',
    iss: null,
    pis: null,
    cofins: null,
    dasRate: 0.155,
    method: 'Tributação unificada via DAS (IRPJ, CSLL, PIS, COFINS, ISS, CPP).',
    obligation: 'Vedado — faturamento excede R$ 4,8M/ano',
    obColor: 'bg-red-50 text-red-700',
    pisLabel: null,
    cofinsLabel: null,
    irpjLabel: null,
    csllLabel: null,
    dasLabel: 'DAS — Simples Nacional, Anexo III (15,5%)',
    dre26: {
      dasv: -7502000,
      totalDed: -8035400,
      rl: 40364600,
      ebit: 9614600,
      ebitda: 10414600,
      lair: 9009600,
      irpj: 0,
      csll: 0,
      totalImp: 0,
      ll: 9009600
    },
    dre25: {
      dasv: -6401500,
      totalDed: -6934900,
      rl: 34365100,
      ebit: 6785100,
      ebitda: 7490100,
      lair: 6310100,
      irpj: 0,
      csll: 0,
      totalImp: 0,
      ll: 6310100
    }
  }
};

// Folha: cada funcionário tem remuneração completa + deduções do empregado + encargos patronais
var PAYROLL_INIT = [{
  id: 1,
  name: 'Carlos Souza',
  role: 'Técnico de Campo',
  cpf: '123.456.789-01',
  admDate: '2022-03-15',
  ref: '2026-03',
  status: 'PAID',
  base: 350000,
  horasExtras: 35000,
  adicNoturno: 0,
  periculosidade: 0,
  insalubridade: 22800,
  bonus: 50000,
  vt: 15000,
  vr: 22000,
  planoSaude: 18000,
  dINSS: 43600,
  dIRRF: 28000,
  dVT: 9000,
  dPlano: 4500,
  inssPatronal: 91600,
  fgts: 36640,
  rat: 9160,
  sistemaS: 26528,
  prov13: 38033,
  provFerias: 50711,
  fgtsProv: 7131
}, {
  id: 2,
  name: 'Paulo Mendes',
  role: 'Técnico Sênior',
  cpf: '234.567.890-02',
  admDate: '2020-08-01',
  ref: '2026-03',
  status: 'PAID',
  base: 350000,
  horasExtras: 52500,
  adicNoturno: 17500,
  periculosidade: 0,
  insalubridade: 22800,
  bonus: 30000,
  vt: 15000,
  vr: 22000,
  planoSaude: 18000,
  dINSS: 47200,
  dIRRF: 35400,
  dVT: 9000,
  dPlano: 4500,
  inssPatronal: 96600,
  fgts: 38640,
  rat: 9660,
  sistemaS: 27948,
  prov13: 39292,
  provFerias: 52389,
  fgtsProv: 7343
}, {
  id: 3,
  name: 'Rafael Lima',
  role: 'Técnico de Manutenção',
  cpf: '345.678.901-03',
  admDate: '2023-01-10',
  ref: '2026-03',
  status: 'PENDING',
  base: 320000,
  horasExtras: 16000,
  adicNoturno: 0,
  periculosidade: 0,
  insalubridade: 22800,
  bonus: 20000,
  vt: 15000,
  vr: 22000,
  planoSaude: 18000,
  dINSS: 37800,
  dIRRF: 18200,
  dVT: 9000,
  dPlano: 4500,
  inssPatronal: 79600,
  fgts: 31840,
  rat: 7960,
  sistemaS: 23012,
  prov13: 31533,
  provFerias: 42044,
  fgtsProv: 5890
}, {
  id: 4,
  name: 'Ana Oliveira',
  role: 'Gerente Operacional',
  cpf: '456.789.012-04',
  admDate: '2019-05-20',
  ref: '2026-03',
  status: 'PAID',
  base: 600000,
  horasExtras: 0,
  adicNoturno: 0,
  periculosidade: 0,
  insalubridade: 0,
  bonus: 80000,
  vt: 15000,
  vr: 22000,
  planoSaude: 28000,
  dINSS: 84000,
  dIRRF: 112400,
  dVT: 9000,
  dPlano: 7000,
  inssPatronal: 136000,
  fgts: 54400,
  rat: 13600,
  sistemaS: 39344,
  prov13: 56667,
  provFerias: 75556,
  fgtsProv: 10578
}, {
  id: 5,
  name: 'João Silva',
  role: 'Administrador/Diretor',
  cpf: '567.890.123-05',
  admDate: '2018-01-03',
  ref: '2026-03',
  status: 'PAID',
  base: 800000,
  horasExtras: 0,
  adicNoturno: 0,
  periculosidade: 0,
  insalubridade: 0,
  bonus: 0,
  vt: 0,
  vr: 0,
  planoSaude: 38000,
  dINSS: 112000,
  dIRRF: 187400,
  dVT: 0,
  dPlano: 9500,
  inssPatronal: 160000,
  fgts: 64000,
  rat: 16000,
  sistemaS: 46240,
  prov13: 66667,
  provFerias: 88889,
  fgtsProv: 12444
}, {
  id: 6,
  name: 'Marcos Costa',
  role: 'Técnico (Afastado)',
  cpf: '678.901.234-06',
  admDate: '2021-11-15',
  ref: '2026-03',
  status: 'PENDING',
  base: 320000,
  horasExtras: 0,
  adicNoturno: 0,
  periculosidade: 0,
  insalubridade: 0,
  bonus: 0,
  vt: 15000,
  vr: 22000,
  planoSaude: 18000,
  dINSS: 30400,
  dIRRF: 0,
  dVT: 9000,
  dPlano: 4500,
  inssPatronal: 64000,
  fgts: 25600,
  rat: 6400,
  sistemaS: 18496,
  prov13: 26667,
  provFerias: 35556,
  fgtsProv: 4978
}];
var FinancialPage = function FinancialPage(_ref31) {
  var _ref31$taxRegime = _ref31.taxRegime,
    taxRegime = _ref31$taxRegime === void 0 ? 'REAL' : _ref31$taxRegime,
    finPerms = _ref31.finPerms;
  var _useState95 = useState('receivable'),
    _useState96 = _slicedToArray(_useState95, 2),
    tab = _useState96[0],
    setTab = _useState96[1];
  var _useState97 = useState('all'),
    _useState98 = _slicedToArray(_useState97, 2),
    statusR = _useState98[0],
    setStatusR = _useState98[1];
  var _useState99 = useState('all'),
    _useState100 = _slicedToArray(_useState99, 2),
    statusP = _useState100[0],
    setStatusP = _useState100[1];
  var _useState101 = useState('all'),
    _useState102 = _slicedToArray(_useState101, 2),
    catR = _useState102[0],
    setCatR = _useState102[1];
  var _useState103 = useState('all'),
    _useState104 = _slicedToArray(_useState103, 2),
    catP = _useState104[0],
    setCatP = _useState104[1];
  // filtros de data por aba
  var _useState105 = useState(''),
    _useState106 = _slicedToArray(_useState105, 2),
    dateFromR = _useState106[0],
    setDateFromR = _useState106[1];
  var _useState107 = useState(''),
    _useState108 = _slicedToArray(_useState107, 2),
    dateToR = _useState108[0],
    setDateToR = _useState108[1];
  var _useState109 = useState(''),
    _useState110 = _slicedToArray(_useState109, 2),
    dateFromP = _useState110[0],
    setDateFromP = _useState110[1];
  var _useState111 = useState(''),
    _useState112 = _slicedToArray(_useState111, 2),
    dateToP = _useState112[0],
    setDateToP = _useState112[1];
  var _useState113 = useState(function () {
      var d = new Date();
      return "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, '0'), "-01");
    }),
    _useState114 = _slicedToArray(_useState113, 2),
    dateFromCF = _useState114[0],
    setDateFromCF = _useState114[1];
  var _useState115 = useState(function () {
      var d = new Date();
      var e = new Date(d.getFullYear(), d.getMonth() + 1, 0);
      return e.toISOString().split('T')[0];
    }),
    _useState116 = _slicedToArray(_useState115, 2),
    dateToCF = _useState116[0],
    setDateToCF = _useState116[1];
  var _useState117 = useState(function () {
      return new Date().toISOString().slice(0, 7);
    }),
    _useState118 = _slicedToArray(_useState117, 2),
    drePeriod = _useState118[0],
    setDrePeriod = _useState118[1];
  var _useState119 = useState(null),
    _useState120 = _slicedToArray(_useState119, 2),
    infoOpen = _useState120[0],
    setInfoOpen = _useState120[1];
  var _useState121 = useState('2026-03'),
    _useState122 = _slicedToArray(_useState121, 2),
    budPeriod = _useState122[0],
    setBudPeriod = _useState122[1];
  var _useState123 = useState(new Set()),
    _useState124 = _slicedToArray(_useState123, 2),
    approvalSel = _useState124[0],
    setApprovalSel = _useState124[1];
  var _useState125 = useState([]),
    _useState126 = _slicedToArray(_useState125, 2),
    transactions = _useState126[0],
    setTx = _useState126[1];
  var _useState127 = useState(INCOME_CATS_INIT.map(function (n) {
      return {
        id: n,
        name: n
      };
    })),
    _useState128 = _slicedToArray(_useState127, 2),
    incomeCats = _useState128[0],
    setIncomeCats = _useState128[1];
  var _useState129 = useState(EXPENSE_CATS_INIT.map(function (n) {
      return {
        id: n,
        name: n
      };
    })),
    _useState130 = _slicedToArray(_useState129, 2),
    expenseCats = _useState130[0],
    setExpenseCats = _useState130[1];
  var _useState131 = useState(BANK_ACCOUNTS_INIT),
    _useState132 = _slicedToArray(_useState131, 2),
    bankAccounts = _useState132[0],
    setBankAccounts = _useState132[1];
  var _useState133 = useState(PAYMENT_METHODS_INIT),
    _useState134 = _slicedToArray(_useState133, 2),
    payMethods = _useState134[0],
    setPayMethods = _useState134[1];
  var _useState135 = useState(null),
    _useState136 = _slicedToArray(_useState135, 2),
    toast = _useState136[0],
    setToast = _useState136[1];
  var _useState137 = useState(false),
    _useState138 = _slicedToArray(_useState137, 2),
    newTxModal = _useState138[0],
    setNewTxModal = _useState138[1];
  var _useState139 = useState({
      type: 'INCOME',
      description: '',
      amount: '',
      due_date: '',
      category_id: '',
      bank_account_id: '',
      payment_method_id: '',
      customer_id: '',
      service_type: ''
    }),
    _useState140 = _slicedToArray(_useState139, 2),
    newTx = _useState140[0],
    setNewTx = _useState140[1];
  useEffect(function () {
    loadFinancialData();
  }, []);
  var loadFinancialData = /*#__PURE__*/function () {
    var _loadFinancialData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
      var _txRes$data2, _baRes$data, _pmRes$data, _techRes$data;
      var _yield$Promise$all5, _yield$Promise$all6, txRes, catRes, baRes, pmRes, techRes, custRes2, dreRes, _catRes$data, _catRes$data2;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.n) {
          case 0:
            _context14.n = 1;
            return Promise.all([api.getTransactions({limit:100}), api.getCategories(), api.getBankAccounts(), api.getPaymentMethods(), api.getTechnicians(), api.getCustomers(), api.getDreGerencial()]);
          case 1:
            _yield$Promise$all5 = _context14.v;
            _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 7);
            txRes = _yield$Promise$all6[0];
            catRes = _yield$Promise$all6[1];
            baRes = _yield$Promise$all6[2];
            pmRes = _yield$Promise$all6[3];
            techRes = _yield$Promise$all6[4];
            custRes2 = _yield$Promise$all6[5];
            dreRes = _yield$Promise$all6[6];
            if (txRes.success) setTx(((_txRes$data2 = txRes.data) === null || _txRes$data2 === void 0 ? void 0 : _txRes$data2.data) || txRes.data || []);
            if (catRes.success) {
              if ((_catRes$data = catRes.data) !== null && _catRes$data !== void 0 && _catRes$data.income) setIncomeCats(catRes.data.income);
              if ((_catRes$data2 = catRes.data) !== null && _catRes$data2 !== void 0 && _catRes$data2.expense) setExpenseCats(catRes.data.expense);
            }
            if (baRes.success) setBankAccounts(((_baRes$data = baRes.data) === null || _baRes$data === void 0 ? void 0 : _baRes$data.data) || baRes.data || BANK_ACCOUNTS_INIT);
            if (pmRes.success) setPayMethods(((_pmRes$data = pmRes.data) === null || _pmRes$data === void 0 ? void 0 : _pmRes$data.data) || pmRes.data || PAYMENT_METHODS_INIT);
            if (techRes.success) setPayTechs(((_techRes$data = techRes.data) === null || _techRes$data === void 0 ? void 0 : _techRes$data.data) || techRes.data || []);
            if (custRes2 && custRes2.success) setFinCustomers((custRes2.data && custRes2.data.data) || custRes2.data || []);
            if (dreRes && dreRes.success) setDreGerencial(dreRes.data);
          case 2:
            return _context14.a(2);
        }
      }, _callee14);
    }));
    function loadFinancialData() {
      return _loadFinancialData.apply(this, arguments);
    }
    return loadFinancialData;
  }();
  var _useState141 = useState(null),
    _useState142 = _slicedToArray(_useState141, 2),
    importModal = _useState142[0],
    setImportModal = _useState142[1];
  var _useState143 = useState(''),
    _useState144 = _slicedToArray(_useState143, 2),
    importText = _useState144[0],
    setImportText = _useState144[1];
  // Folha Salarial — estados no topo (hooks não podem ficar dentro de IIFE)
  var _useState145 = useState(function () {
      try {
        var s = localStorage.getItem('opticom_payroll');
        return s ? JSON.parse(s) : PAYROLL_INIT;
      } catch (_unused) {
        return PAYROLL_INIT;
      }
    }),
    _useState146 = _slicedToArray(_useState145, 2),
    payroll = _useState146[0],
    setPayroll = _useState146[1];
  var _useState147 = useState(function () {
      return new Date().toISOString().slice(0, 7);
    }),
    _useState148 = _slicedToArray(_useState147, 2),
    payrollRef = _useState148[0],
    setPayrollRef = _useState148[1];
  var _useState149 = useState([]),
    _useState150 = _slicedToArray(_useState149, 2),
    payTechs = _useState150[0],
    setPayTechs = _useState150[1];
  var _useStateFinCust = useState([]),
    _useStateFinCustArr = _slicedToArray(_useStateFinCust, 2),
    finCustomers = _useStateFinCustArr[0],
    setFinCustomers = _useStateFinCustArr[1];
  var _useStateDreData = useState(null),
    _useStateDreDataArr = _slicedToArray(_useStateDreData, 2),
    dreGerencial = _useStateDreDataArr[0],
    setDreGerencial = _useStateDreDataArr[1];
  var _useStateDreSub = useState('consolidado'),
    _useStateDreSubArr = _slicedToArray(_useStateDreSub, 2),
    dreSub = _useStateDreSubArr[0],
    setDreSub = _useStateDreSubArr[1];
  useEffect(function () {
    localStorage.setItem('opticom_payroll', JSON.stringify(payroll));
  }, [payroll]);
  var _useState151 = useState(null),
    _useState152 = _slicedToArray(_useState151, 2),
    payEmpModal = _useState152[0],
    setPayEmpModal = _useState152[1]; // funcionário selecionado para ver detalhes
  var _useState153 = useState(false),
    _useState154 = _slicedToArray(_useState153, 2),
    newPayModal = _useState154[0],
    setNewPayModal = _useState154[1];
  var _useState155 = useState(null),
    _useState156 = _slicedToArray(_useState155, 2),
    editPayModal = _useState156[0],
    setEditPayModal = _useState156[1]; // funcionário em edição
  var _useState157 = useState({}),
    _useState158 = _slicedToArray(_useState157, 2),
    editPayForm = _useState158[0],
    setEditPayForm = _useState158[1];
  var _useState159 = useState({
      techId: '',
      name: '',
      role: 'Técnico de Campo',
      cpf: '',
      admDate: '',
      base: '',
      horasExtras: '',
      adicNoturno: '',
      periculosidade: '',
      insalubridade: '',
      bonus: '',
      vt: '',
      vr: '',
      planoSaude: ''
    }),
    _useState160 = _slicedToArray(_useState159, 2),
    payForm = _useState160[0],
    setPayForm = _useState160[1];
  // Extrato Bancário
  var _useState161 = useState([]),
    _useState162 = _slicedToArray(_useState161, 2),
    stmtLines = _useState162[0],
    setStmtLines = _useState162[1];
  var _useState163 = useState({}),
    _useState164 = _slicedToArray(_useState163, 2),
    stmtResults = _useState164[0],
    setStmtResults = _useState164[1];
  var _useState165 = useState({}),
    _useState166 = _slicedToArray(_useState165, 2),
    stmtCats = _useState166[0],
    setStmtCats = _useState166[1];
  var _useState167 = useState(''),
    _useState168 = _slicedToArray(_useState167, 2),
    stmtFileName = _useState168[0],
    setStmtFileName = _useState168[1];
  var _useState169 = useState(false),
    _useState170 = _slicedToArray(_useState169, 2),
    stmtDragging = _useState170[0],
    setStmtDragging = _useState170[1];

  // abre o modal de edição pré-preenchido com os dados atuais do funcionário
  var openEditPay = function openEditPay(emp) {
    var c = function c(v) {
      return v ? (v / 100).toFixed(2) : '';
    };
    setEditPayForm({
      name: emp.name,
      role: emp.role,
      cpf: emp.cpf || '',
      admDate: emp.admDate || '',
      base: c(emp.base),
      horasExtras: c(emp.horasExtras),
      adicNoturno: c(emp.adicNoturno),
      periculosidade: c(emp.periculosidade),
      insalubridade: c(emp.insalubridade),
      bonus: c(emp.bonus),
      vt: c(emp.vt),
      vr: c(emp.vr),
      planoSaude: c(emp.planoSaude),
      dINSS: c(emp.dINSS),
      dIRRF: c(emp.dIRRF),
      dVT: c(emp.dVT),
      dPlano: c(emp.dPlano),
      inssPatronal: c(emp.inssPatronal),
      fgts: c(emp.fgts),
      rat: c(emp.rat),
      sistemaS: c(emp.sistemaS),
      prov13: c(emp.prov13),
      provFerias: c(emp.provFerias),
      fgtsProv: c(emp.fgtsProv)
    });
    setEditPayModal(emp);
  };
  var saveEditPay = function saveEditPay() {
    var n = function n(k) {
      var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return Math.round(parseFloat(editPayForm[k] || d) * 100);
    };
    var updated = _objectSpread(_objectSpread({}, editPayModal), {}, {
      name: editPayForm.name.trim(),
      role: editPayForm.role,
      cpf: editPayForm.cpf,
      admDate: editPayForm.admDate,
      base: n('base'),
      horasExtras: n('horasExtras'),
      adicNoturno: n('adicNoturno'),
      periculosidade: n('periculosidade'),
      insalubridade: n('insalubridade'),
      bonus: n('bonus'),
      vt: n('vt'),
      vr: n('vr'),
      planoSaude: n('planoSaude'),
      dINSS: n('dINSS'),
      dIRRF: n('dIRRF'),
      dVT: n('dVT'),
      dPlano: n('dPlano'),
      inssPatronal: n('inssPatronal'),
      fgts: n('fgts'),
      rat: n('rat'),
      sistemaS: n('sistemaS'),
      prov13: n('prov13'),
      provFerias: n('provFerias'),
      fgtsProv: n('fgtsProv')
    });
    setPayroll(function (prev) {
      return prev.map(function (p) {
        return p.id === editPayModal.id ? updated : p;
      });
    });
    setPayEmpModal(updated); // atualiza o holerite aberto com os novos dados
    setEditPayModal(null);
    setToast("Dados de ".concat(updated.name, " atualizados!"));
  };

  // ── Extrato Bancário — parsers e matching ─────────────────────────────────
  // Converte string monetária → centavos (inteiro), igual à convenção do DB.
  var parseMoney = function parseMoney(s) {
    var t = (s || '').trim().replace(/[R$\s"']/g, '');
    if (!t || t === '-' || t === '+') return 0;
    var reais;
    // Formato BR com centavos: termina em ,XX → vírgula é decimal (ex: 1.000,00)
    if (/[,]\d{1,2}$/.test(t)) reais = parseFloat(t.replace(/\./g, '').replace(',', '.')) || 0;
    // Formato BR sem centavos: ponto como separador de milhar (ex: 1.000 ou 10.000)
    else if (/^-?\d{1,3}(\.\d{3})+$/.test(t)) reais = parseFloat(t.replace(/\./g, '')) || 0;
    // Formato US ou inteiro: ponto é decimal (ou sem decimal)
    else reais = parseFloat(t.replace(/,/g, '')) || 0;
    return Math.round(reais * 100); // retorna centavos
  };
  var parseOFX = function parseOFX(text) {
    var lines = [];
    // Suporta SGML (sem fechamento) e XML (com fechamento de tag)
    var re = /<STMTTRN[^>]*>([\s\S]*?)<\/STMTTRN>|<STMTTRN>([\s\S]*?)(?=<STMTTRN>|<\/BANKTRANLIST>)/gi;
    var m;
    var _loop = function _loop() {
      var b = m[1] || m[2] || '';
      var g = function g(tag) {
        var r = new RegExp("<".concat(tag, ">([^<\r\n]+)"), 'i');
        var x = r.exec(b);
        return x ? x[1].trim() : '';
      };
      var dtRaw = g('DTPOSTED');
      var date = dtRaw.length >= 8 ? "".concat(dtRaw.slice(0, 4), "-").concat(dtRaw.slice(4, 6), "-").concat(dtRaw.slice(6, 8)) : '';
      var raw = parseMoney(g('TRNAMT'));
      if (raw === 0 && !g('FITID')) return 1; // continue
      lines.push({
        id: g('FITID') || String(lines.length),
        date: date,
        description: g('MEMO') || g('NAME') || '—',
        amount: Math.abs(raw),
        type: raw >= 0 ? 'CREDIT' : 'DEBIT'
      });
    };
    while ((m = re.exec(text)) !== null) {
      if (_loop()) continue;
    }
    return lines;
  };
  var parseCSV = function parseCSV(text) {
    // Detecta separador: ; ou tab (evita confundir , de milhar/decimal)
    var sep = text.includes(';') ? ';' : text.includes('\t') ? '\t' : ',';
    var rows = text.trim().split(/\r?\n/).map(function (r) {
      return r.split(sep);
    });
    if (rows.length === 0) return [];
    var hdr = rows[0].map(function (h) {
      return h.trim().toLowerCase().replace(/['"]/g, '');
    });
    var dI = hdr.findIndex(function (h) {
      return h.includes('data') || h.includes('date');
    });
    var nI = hdr.findIndex(function (h) {
      return h.includes('descri') || h.includes('histor') || h.includes('memo') || h.includes('name');
    });
    var aI = hdr.findIndex(function (h) {
      return h.includes('valor') || h.includes('amount') || h.includes('value');
    });
    var tI = hdr.findIndex(function (h) {
      return h.includes('tipo') || h.includes('type') || h.includes('cr/db') || h.includes('deb') || h.includes('lancamento');
    });
    var data = dI >= 0 || nI >= 0 ? rows.slice(1) : rows;
    return data.filter(function (r) {
      return r.length > 1;
    }).map(function (r, i) {
      var clean = function clean(s) {
        return (s || '').trim().replace(/^["']|["']$/g, '');
      };
      var rawAmt = parseMoney(clean(r[aI >= 0 ? aI : 2]));
      var date = clean(r[dI >= 0 ? dI : 0]);
      var dm = date.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
      if (dm) {
        var y = dm[3].length === 2 ? '20' + dm[3] : dm[3];
        date = "".concat(y, "-").concat(dm[2].padStart(2, '0'), "-").concat(dm[1].padStart(2, '0'));
      }
      var type = rawAmt < 0 ? 'DEBIT' : 'CREDIT';
      if (tI >= 0) {
        var t = clean(r[tI]).toUpperCase();
        if (t.includes('DEB') || t === 'D') type = 'DEBIT';else if (t.includes('CRE') || t === 'C') type = 'CREDIT';
      }
      return {
        id: String(i),
        date: date,
        description: clean(r[nI >= 0 ? nI : 1]) || '—',
        amount: Math.abs(rawAmt),
        type: type
      };
    }).filter(function (l) {
      return l.amount > 0;
    });
  };
  var parseStatement = function parseStatement(text, filename) {
    if (filename.toLowerCase().endsWith('.ofx') || text.includes('<STMTTRN>')) return parseOFX(text);
    return parseCSV(text);
  };
  var loadStmtFile = function loadStmtFile(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (e) {
      var lines = parseStatement(e.target.result, file.name);
      var initialResults = {};
      lines.forEach(function (line) {
        var lineType = line.type === 'CREDIT' ? 'INCOME' : 'EXPENSE';
        var match = transactions.find(function (tx) {
          return tx.amount === line.amount && tx.type === lineType && (tx.due_date === line.date || tx.paid_date === line.date);
        });
        if (match) initialResults[line.id] = {
          action: 'duplicate',
          matchId: match.id
        };
      });
      setStmtLines(lines);
      setStmtResults(initialResults);
      setStmtCats({});
      setStmtFileName(file.name);
    };
    reader.readAsText(file, 'utf-8');
  };
  var importStmtLine = /*#__PURE__*/function () {
    var _importStmtLine = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(line) {
      var catId, txData, r, _r$data3, tx;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.n) {
          case 0:
            catId = stmtCats[line.id];
            if (catId) {
              _context15.n = 1;
              break;
            }
            setToast('Selecione uma categoria antes de importar');
            return _context15.a(2);
          case 1:
            txData = {
              type: line.type === 'CREDIT' ? 'INCOME' : 'EXPENSE',
              description: line.description,
              amount: line.amount,
              due_date: line.date,
              paid_date: line.date,
              status: line.type === 'CREDIT' ? 'RECEIVED' : 'PAID',
              category_id: catId
            };
            _context15.n = 2;
            return api.createTransaction(txData);
          case 2:
            r = _context15.v;
            if (r.success) {
              tx = ((_r$data3 = r.data) === null || _r$data3 === void 0 ? void 0 : _r$data3.data) || r.data;
              setTx(function (p) {
                return [tx].concat(_toConsumableArray(p));
              });
              setStmtResults(function (p) {
                return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, line.id, {
                  action: 'imported'
                }));
              });
              setToast("Lan\xE7amento criado: ".concat(line.description.slice(0, 40)));
            } else {
              setToast(r.error || 'Erro ao criar lançamento');
            }
          case 3:
            return _context15.a(2);
        }
      }, _callee15);
    }));
    function importStmtLine(_x1) {
      return _importStmtLine.apply(this, arguments);
    }
    return importStmtLine;
  }();
  var importAllStmt = /*#__PURE__*/function () {
    var _importAllStmt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
      var pending, _iterator, _step, line, _t;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            pending = stmtLines.filter(function (l) {
              var _stmtResults$l$id;
              return !((_stmtResults$l$id = stmtResults[l.id]) !== null && _stmtResults$l$id !== void 0 && _stmtResults$l$id.action) && stmtCats[l.id];
            });
            if (pending.length) {
              _context16.n = 1;
              break;
            }
            setToast('Nenhuma linha com categoria selecionada');
            return _context16.a(2);
          case 1:
            _iterator = _createForOfIteratorHelper(pending);
            _context16.p = 2;
            _iterator.s();
          case 3:
            if ((_step = _iterator.n()).done) {
              _context16.n = 5;
              break;
            }
            line = _step.value;
            _context16.n = 4;
            return importStmtLine(line);
          case 4:
            _context16.n = 3;
            break;
          case 5:
            _context16.n = 7;
            break;
          case 6:
            _context16.p = 6;
            _t = _context16.v;
            _iterator.e(_t);
          case 7:
            _context16.p = 7;
            _iterator.f();
            return _context16.f(7);
          case 8:
            return _context16.a(2);
        }
      }, _callee16, null, [[2, 6, 7, 8]]);
    }));
    function importAllStmt() {
      return _importAllStmt.apply(this, arguments);
    }
    return importAllStmt;
  }();
  var ignoreStmt = function ignoreStmt(id) {
    return setStmtResults(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, id, {
        action: 'ignore'
      }));
    });
  };

  // helper reutilizável de filtro de data
  var FIN_INFO = {
    // ── DFC ────────────────────────────────────────────────────────────────
    'dfc-oper': {
      title: 'Atividades Operacionais',
      calc: 'Recebimentos de Clientes − CSP − Pessoal − Administrativo/Comercial − Impostos − Outros Operacionais',
      desc: 'Mostra o caixa gerado ou consumido pelas atividades-fim da empresa (prestar serviços, pagar fornecedores, pessoal e impostos). É o indicador mais importante da saúde financeira operacional: se for positivo e recorrente, a empresa gera caixa com seu próprio negócio.'
    },
    'dfc-inv': {
      title: 'Atividades de Investimento',
      calc: 'Recebimentos de Venda de Ativos − Pagamentos de Compra de Equipamentos/Veículos',
      desc: 'Representa o caixa gasto ou recebido na aquisição e venda de ativos de longa duração (imobilizado, veículos, equipamentos). Saídas aqui são normalmente sinal de crescimento ou renovação da capacidade produtiva.'
    },
    'dfc-fin': {
      title: 'Atividades de Financiamento',
      calc: 'Empréstimos Obtidos / Aportes − Amortizações e Juros Pagos',
      desc: 'Reflete movimentações com credores e sócios: empréstimos captados, aportes de capital, pagamento de parcelas e juros. Entradas indicam captação; saídas indicam amortização de dívidas.'
    },
    'dfc-var': {
      title: 'Variação Líquida de Caixa',
      calc: 'Atividades Operacionais + Atividades de Investimento + Atividades de Financiamento',
      desc: 'É o resultado final do período: quanto o caixa aumentou ou diminuiu. Soma os três grupos de atividades. Positivo = a empresa terminou o período com mais caixa do que começou.'
    },
    'dfc-ini': {
      title: 'Saldo Inicial do Período',
      calc: 'Configurado em Configurações → Contas e Saldos → Saldo Inicial de cada conta bancária',
      desc: 'Representa o saldo total em caixa e contas bancárias no início do período analisado. É a base a partir da qual a variação líquida é somada para chegar ao saldo final.'
    },
    'dfc-fin2': {
      title: 'Saldo Final Projetado',
      calc: 'Saldo Inicial + Variação Líquida de Caixa',
      desc: 'Estimativa do saldo em caixa ao final do período, combinando o saldo de abertura com todas as movimentações registradas. Serve como projeção do quanto a empresa terá disponível no banco ao encerrar o período.'
    },
    // ── DRE KPIs ───────────────────────────────────────────────────────────
    'dre-recliq': {
      title: 'Receita Líquida',
      calc: 'Receita Bruta − Deduções (ISS, PIS, COFINS e outros impostos sobre receita)',
      desc: 'É o valor que a empresa efetivamente faturou após descontar todos os impostos incidentes sobre a receita bruta. É a base de cálculo das demais margens e a linha de partida do DRE.'
    },
    'dre-lb': {
      title: 'Lucro Bruto',
      calc: 'Receita Líquida − Custo dos Serviços Prestados (CSP)',
      desc: 'Resultado depois de deduzir apenas os custos diretamente ligados à execução do serviço (mão de obra técnica, peças e materiais aplicados, subcontratados). Mede a eficiência operacional bruta antes das despesas estruturais.'
    },
    'dre-ebit': {
      title: 'EBIT — Resultado Operacional',
      calc: 'Lucro Bruto − Despesas Operacionais (Pessoal + Administrativo + Comercial)',
      desc: 'Earnings Before Interest and Taxes — lucro antes do resultado financeiro e do imposto de renda. Representa o resultado gerado exclusivamente pela operação, sem interferência de como a empresa é financiada ou da alíquota tributária.'
    },
    'dre-ebitda': {
      title: 'EBITDA',
      calc: 'EBIT + Depreciação e Amortização (D&A)',
      desc: 'Earnings Before Interest, Taxes, Depreciation and Amortization. Elimina o efeito não-caixa da depreciação e amortização, aproximando o resultado operacional ao caixa gerado pela operação. Muito usado para comparar empresas e avaliar capacidade de pagamento de dívidas.'
    },
    'dre-ll': {
      title: 'Lucro Líquido',
      calc: 'LAIR (Lucro Antes do IR) − IRPJ e CSLL',
      desc: 'O resultado final do exercício — o que sobra para os sócios após todas as deduções: custos, despesas operacionais, resultado financeiro e impostos sobre o lucro. Se positivo, pode ser distribuído como dividendos ou reinvestido.'
    },
    // ── DRE Margens ────────────────────────────────────────────────────────
    'mg-bruta': {
      title: 'Margem Bruta',
      calc: 'Lucro Bruto ÷ Receita Líquida × 100',
      desc: 'Percentual da receita que sobra após pagar os custos diretos do serviço. Uma margem bruta alta indica eficiência na execução. Em empresas de serviços, valores entre 40–70% são comuns; abaixo de 30% pode indicar custo de execução elevado.'
    },
    'mg-oper': {
      title: 'Margem Operacional',
      calc: 'EBIT ÷ Receita Líquida × 100',
      desc: 'Percentual da receita que se converte em resultado operacional, já descontadas todas as despesas estruturais (pessoal, administrativo, comercial). Indica o quanto a operação é lucrativa antes de considerar juros e impostos.'
    },
    'mg-liq': {
      title: 'Margem Líquida',
      calc: 'Lucro Líquido ÷ Receita Líquida × 100',
      desc: 'Percentual final que sobra para os sócios de cada R$ faturado. É a margem mais completa pois considera todos os custos, despesas, resultado financeiro e impostos sobre o lucro. Em empresas de serviços B2B, margens entre 8–20% são consideradas saudáveis.'
    }
  };
  var InfoBtn = function InfoBtn(_ref32) {
    var id = _ref32.id;
    return /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        setInfoOpen(id);
      },
      className: "flex-shrink-0 w-5 h-5 rounded-full bg-white/60 hover:bg-white border border-gray-300 text-gray-400 hover:text-blue-600 hover:border-blue-400 flex items-center justify-center transition-colors text-xs font-bold leading-none",
      title: "Saiba mais"
    }, "\u24D8");
  };
  var InfoModal = function InfoModal() {
    var info = infoOpen ? FIN_INFO[infoOpen] : null;
    if (!info) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4",
      onClick: function onClick() {
        return setInfoOpen(null);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-xl max-w-md w-full p-6 space-y-4",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-3"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-base font-bold text-gray-800"
    }, info.title), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setInfoOpen(null);
      },
      className: "text-gray-400 hover:text-gray-600 text-lg leading-none mt-0.5"
    }, "\u2715")), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-600 leading-relaxed"
    }, info.desc), /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 border border-blue-100 rounded-xl p-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-blue-700 mb-1 uppercase tracking-wide"
    }, "C\xE1lculo"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-800 font-mono leading-relaxed"
    }, info.calc))));
  };
  var DateFilter = function DateFilter(_ref33) {
    var from = _ref33.from,
      setFrom = _ref33.setFrom,
      to = _ref33.to,
      setTo = _ref33.setTo;
    return /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-400 whitespace-nowrap"
    }, "De:"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      value: from,
      onChange: function onChange(e) {
        return setFrom(e.target.value);
      },
      className: "text-xs border-0 bg-transparent focus:outline-none text-gray-700 w-32"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-400"
    }, "At\xE9:"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      value: to,
      onChange: function onChange(e) {
        return setTo(e.target.value);
      },
      className: "text-xs border-0 bg-transparent focus:outline-none text-gray-700 w-32"
    }), (from || to) && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setFrom('');
        setTo('');
      },
      className: "text-xs text-gray-400 hover:text-red-500 ml-1 font-bold"
    }, "\u2715"));
  };
  var monthLabel = function monthLabel(ym) {
    var _ym$split = ym.split('-'),
      _ym$split2 = _slicedToArray(_ym$split, 2),
      y = _ym$split2[0],
      m = _ym$split2[1];
    var nms = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return "".concat(nms[parseInt(m) - 1], " ").concat(y);
  };
  var prevMonth = function prevMonth(ym) {
    var _ym$split$map = ym.split('-').map(Number),
      _ym$split$map2 = _slicedToArray(_ym$split$map, 2),
      y = _ym$split$map2[0],
      m = _ym$split$map2[1];
    return m === 1 ? "".concat(y - 1, "-12") : "".concat(y, "-").concat(String(m - 1).padStart(2, '0'));
  };

  // períodos para Orçado vs Real
  var BUD_PERIODS = [['2026-04', 'Abril 2026'], ['2026-03', 'Março 2026'], ['2026-02', 'Fevereiro 2026'], ['2026-01', 'Janeiro 2026'], ['2025-12', 'Dezembro 2025'], ['2025-11', 'Novembro 2025']];
  var settle = /*#__PURE__*/function () {
    var _settle = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(id) {
      var tx, newStatus, today, result;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.n) {
          case 0:
            tx = transactions.find(function (t) {
              return t.id === id;
            });
            newStatus = (tx === null || tx === void 0 ? void 0 : tx.type) === 'INCOME' ? 'RECEIVED' : 'PAID';
            today = new Date().toISOString().split('T')[0];
            _context17.n = 1;
            return api.updateTransaction(id, {
              status: newStatus,
              paid_date: today
            });
          case 1:
            result = _context17.v;
            if (result.success) {
              setTx(function (prev) {
                return prev.map(function (t) {
                  return t.id !== id ? t : _objectSpread(_objectSpread({}, t), {}, {
                    status: newStatus,
                    paid_date: today
                  });
                });
              });
              setToast((tx === null || tx === void 0 ? void 0 : tx.type) === 'INCOME' ? 'Recebimento registrado!' : 'Pagamento registrado!');
            } else {
              setToast("Erro: ".concat(result.error));
            }
          case 2:
            return _context17.a(2);
        }
      }, _callee17);
    }));
    function settle(_x10) {
      return _settle.apply(this, arguments);
    }
    return settle;
  }();
  var addTx = /*#__PURE__*/function () {
    var _addTx = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
      var result;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.n) {
          case 0:
            if (newTx.description) {
              _context18.n = 1;
              break;
            }
            setToast('Descrição é obrigatória');
            return _context18.a(2);
          case 1:
            if (!(!newTx.amount || parseFloat(newTx.amount) <= 0)) {
              _context18.n = 2;
              break;
            }
            setToast('Informe um valor válido');
            return _context18.a(2);
          case 2:
            if (newTx.due_date) {
              _context18.n = 3;
              break;
            }
            setToast('Data de vencimento é obrigatória');
            return _context18.a(2);
          case 3:
            _context18.n = 4;
            return api.createTransaction({
              type: newTx.type,
              description: newTx.description,
              amount: Math.round(parseFloat(newTx.amount) * 100),
              due_date: newTx.due_date,
              category_id: newTx.category_id || null,
              bank_account_id: newTx.bank_account_id || null,
              payment_method_id: newTx.payment_method_id || null,
              customer_id: newTx.customer_id || null,
              service_type: newTx.service_type || null,
              status: 'PENDING'
            });
          case 4:
            result = _context18.v;
            if (result.success) {
              setTx(function (prev) {
                return [result.data].concat(_toConsumableArray(prev));
              });
              setNewTxModal(false);
              setNewTx({
                type: 'EXPENSE',
                description: '',
                amount: '',
                due_date: '',
                category_id: '',
                bank_account_id: '',
                payment_method_id: '',
                customer_id: '',
                service_type: ''
              });
              api.getDreGerencial().then(function(r) { if (r.success) setDreGerencial(r.data); });
              setToast('Lançamento criado!');
            } else {
              setToast("Erro ao criar lan\xE7amento: ".concat(result.error));
            }
          case 5:
            return _context18.a(2);
        }
      }, _callee18);
    }));
    function addTx() {
      return _addTx.apply(this, arguments);
    }
    return addTx;
  }();
  var parseImport = function parseImport() {
    var lines = importText.trim().split('\n').filter(function (l) {
      return l.trim();
    });
    var type = importModal;
    var parsed = lines.map(function (l, idx) {
      var cols = l.split(/[;\t,]/).map(function (c) {
        return c.trim().replace(/"/g, '');
      });
      var desc = cols[0] || "Importado ".concat(idx + 1);
      var amount = Math.round(parseFloat((cols[1] || '0').replace(',', '.')) * 100);
      var due = cols[2] || '2026-04-30';
      var cat = cols[3] || (type === 'INCOME' ? 'Receita de OS' : 'Administrativo');
      return {
        id: Date.now() + idx,
        type: type,
        status: 'PENDING',
        desc: desc,
        amount: amount,
        due: due,
        cat: cat,
        account: 'Bradesco',
        payMethod: 'PIX'
      };
    });
    setTx(function (prev) {
      return [].concat(_toConsumableArray(prev), _toConsumableArray(parsed));
    });
    setImportModal(null);
    setImportText('');
    setToast("".concat(parsed.length, " lan\xE7amento(s) importado(s)!"));
  };
  var projectedFlow = function projectedFlow() {
    var now = new Date();
    var defaultFrom = "".concat(now.getFullYear(), "-").concat(String(now.getMonth() + 1).padStart(2, '0'), "-01");
    var defaultTo = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
    var from = dateFromCF || defaultFrom;
    var to = dateToCF || defaultTo;
    var days = [];
    var cur = new Date(from);
    var end = new Date(to);
    var _loop2 = function _loop2() {
      var dateStr = cur.toISOString().split('T')[0];
      var dd = dateStr.slice(8, 10) + '/' + dateStr.slice(5, 7);
      var ins = transactions.filter(function (t) {
        return t.type === 'INCOME' && txDue(t) === dateStr;
      }).reduce(function (s, t) {
        return s + t.amount;
      }, 0);
      var outs = transactions.filter(function (t) {
        return t.type === 'EXPENSE' && txDue(t) === dateStr;
      }).reduce(function (s, t) {
        return s + t.amount;
      }, 0);
      if (ins > 0 || outs > 0) days.push({
        date: dd,
        dateStr: dateStr,
        ins: ins,
        outs: outs,
        diff: ins - outs
      });
      cur.setDate(cur.getDate() + 1);
    };
    while (cur <= end) {
      _loop2();
    }
    days.sort(function (a, b) {
      return a.dateStr.localeCompare(b.dateStr);
    });
    var running = bankAccounts.reduce(function (s, b) {
      return s + (b.initial_balance || 0);
    }, 0);
    return days.map(function (d) {
      running += d.diff;
      return _objectSpread(_objectSpread({}, d), {}, {
        balance: running
      });
    });
  };
  var TxTable = function TxTable(_ref34) {
    var txList = _ref34.txList,
      btnLabel = _ref34.btnLabel,
      onSettle = _ref34.onSettle,
      onUpdate = _ref34.onUpdate;
    var _useStateEd = useState(null),
      editTx = _useStateEd[0],
      setEditTx = _useStateEd[1];
    var _useStateForm = useState({}),
      editForm = _useStateForm[0],
      setEditForm = _useStateForm[1];
    var _useStateSv = useState(false),
      saving = _useStateSv[0],
      setSaving = _useStateSv[1];
    var openEdit = function openEdit(t) {
      setEditTx(t);
      setEditForm({
        bank_account_id: t.bank_account_id || '',
        payment_method_id: t.payment_method_id || '',
        due_date: txDue(t) || ''
      });
    };
    var closeEdit = function closeEdit() {
      setEditTx(null);
      setSaving(false);
    };
    var saveEdit = function saveEdit() {
      setSaving(true);
      api.updateTransaction(editTx.id, {
        bank_account_id: editForm.bank_account_id || null,
        payment_method_id: editForm.payment_method_id || null,
        due_date: editForm.due_date || null
      }).then(function (result) {
        if (result.success) {
          if (onUpdate) onUpdate(result.data);
          closeEdit();
          notify.success('Lan\xE7amento atualizado');
        } else {
          setSaving(false);
          notify.error('Erro ao atualizar: ' + (result.error || 'desconhecido'));
        }
      }).catch(function (err) {
        setSaving(false);
        notify.error('Erro ao atualizar: ' + (err && err.message ? err.message : String(err)));
      });
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, editTx && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
      onClick: closeEdit
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-base font-semibold text-gray-800 mb-1"
    }, "Editar Lan\xE7amento"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400 mb-4 truncate"
    }, editTx.description || editTx.desc), /*#__PURE__*/React.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-xs font-medium text-gray-600 mb-1"
    }, "Banco"), /*#__PURE__*/React.createElement("select", {
      value: editForm.bank_account_id,
      onChange: function onChange(e) {
        return setEditForm(Object.assign({}, editForm, {
          bank_account_id: e.target.value
        }));
      },
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u2014 Sem banco \u2014"), bankAccounts.filter(function (b) {
      return b.active !== false;
    }).map(function (b) {
      return /*#__PURE__*/React.createElement("option", {
        key: b.id,
        value: b.id
      }, b.name);
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-xs font-medium text-gray-600 mb-1"
    }, "Forma de Pagamento"), /*#__PURE__*/React.createElement("select", {
      value: editForm.payment_method_id,
      onChange: function onChange(e) {
        return setEditForm(Object.assign({}, editForm, {
          payment_method_id: e.target.value
        }));
      },
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u2014 Sem forma de pagamento \u2014"), payMethods.filter(function (m) {
      return m.active !== false;
    }).map(function (m) {
      return /*#__PURE__*/React.createElement("option", {
        key: m.id,
        value: m.id
      }, m.name);
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mb-5"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-xs font-medium text-gray-600 mb-1"
    }, "Vencimento"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      value: editForm.due_date,
      onChange: function onChange(e) {
        return setEditForm(Object.assign({}, editForm, {
          due_date: e.target.value
        }));
      },
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 justify-end"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: closeEdit,
      disabled: saving,
      className: "px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: saveEdit,
      disabled: saving,
      className: "px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
    }, saving ? "Salvando\u2026" : "Salvar")))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-gray-50 border-b border-gray-200"
    }, /*#__PURE__*/React.createElement("tr", null, ['Descri\xE7\xE3o', 'Categoria', 'Banco', 'F. Pagamento', 'Vencimento', 'Valor', 'Status', ''].map(function (h) {
      return /*#__PURE__*/React.createElement("th", {
        key: h,
        className: "px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
      }, h);
    }))), /*#__PURE__*/React.createElement("tbody", {
      className: "divide-y divide-gray-100"
    }, txList.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "8",
      className: "px-4 py-8 text-center text-sm text-gray-400"
    }, "Nenhum lan\xE7amento encontrado")), txList.map(function (t) {
      var _bankAccounts$find, _payMethods$find;
      return /*#__PURE__*/React.createElement("tr", {
        key: t.id,
        onClick: function onClick() {
          return openEdit(t);
        },
        className: "hover:bg-blue-50 cursor-pointer ".concat(t.status === 'OVERDUE' ? 'bg-red-50' : t.status === 'PAID' || t.status === 'RECEIVED' ? 'bg-green-50/30' : '')
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 max-w-xs"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 truncate"
      }, t.description || t.desc)), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 text-xs text-gray-500"
      }, txCatName(t)), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 text-xs text-gray-500"
      }, ((_bankAccounts$find = bankAccounts.find(function (b) {
        return b.id === t.bank_account_id;
      })) === null || _bankAccounts$find === void 0 ? void 0 : _bankAccounts$find.name) || t.account || /*#__PURE__*/React.createElement("span", {
        className: "text-gray-300"
      }, "\u2014")), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 text-xs text-gray-500"
      }, ((_payMethods$find = payMethods.find(function (m) {
        return m.id === t.payment_method_id;
      })) === null || _payMethods$find === void 0 ? void 0 : _payMethods$find.name) || t.payMethod || /*#__PURE__*/React.createElement("span", {
        className: "text-gray-300"
      }, "\u2014")), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 text-gray-600"
      }, fmtDate(txDue(t))), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 font-semibold text-gray-800"
      }, fmt(t.amount)), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3"
      }, /*#__PURE__*/React.createElement(Badge, {
        status: t.status
      })), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, t.status === 'PENDING' || t.status === 'OVERDUE' ? /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return onSettle(t.id);
        },
        className: "text-xs bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 font-medium"
      }, btnLabel) : /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-gray-300"
      }, "\u2014")));
    })))));
  };
  var totalIn = transactions.filter(function (t) {
    return t.type === 'INCOME';
  }).reduce(function (s, t) {
    return s + t.amount;
  }, 0);
  var totalOut = transactions.filter(function (t) {
    return t.type === 'EXPENSE';
  }).reduce(function (s, t) {
    return s + t.amount;
  }, 0);
  var pendingIn = transactions.filter(function (t) {
    return t.type === 'INCOME' && (t.status === 'PENDING' || t.status === 'OVERDUE');
  }).reduce(function (s, t) {
    return s + t.amount;
  }, 0);
  var pendingOut = transactions.filter(function (t) {
    return t.type === 'EXPENSE' && (t.status === 'PENDING' || t.status === 'OVERDUE');
  }).reduce(function (s, t) {
    return s + t.amount;
  }, 0);
  var txCatName = function txCatName(t) {
    var _incomeCats$concat$fi;
    return ((_incomeCats$concat$fi = incomeCats.concat(expenseCats).find(function (c) {
      return c.id === t.category_id;
    })) === null || _incomeCats$concat$fi === void 0 ? void 0 : _incomeCats$concat$fi.name) || t.cat || '—';
  };
  var txDue = function txDue(t) {
    return t.due_date || t.due || '';
  };
  var receivable = transactions.filter(function (t) {
    return t.type === 'INCOME' && (statusR === 'all' || t.status === statusR) && (catR === 'all' || txCatName(t) === catR) && (!dateFromR || txDue(t) >= dateFromR) && (!dateToR || txDue(t) <= dateToR);
  });
  var payable = transactions.filter(function (t) {
    return t.type === 'EXPENSE' && (statusP === 'all' || t.status === statusP) && (catP === 'all' || txCatName(t) === catP) && (!dateFromP || txDue(t) >= dateFromP) && (!dateToP || txDue(t) <= dateToP);
  });
  var TODAY = new Date().toISOString().split('T')[0];
  var approvalQueue = transactions.filter(function (t) {
    return (t.status === 'PENDING' || t.status === 'OVERDUE') && txDue(t) <= TODAY;
  });
  var ALL_MENU_ITEMS = [{
    id: 'receivable',
    label: 'A Receber',
    icon: '↑',
    color: 'text-green-600',
    bg: 'bg-green-50'
  }, {
    id: 'payable',
    label: 'A Pagar',
    icon: '↓',
    color: 'text-red-600',
    bg: 'bg-red-50'
  }, {
    id: 'cashflow',
    label: 'Fluxo de Caixa',
    icon: '~',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  }, {
    id: 'dre',
    label: 'DRE Gerencial',
    icon: '≡',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }, {
    id: 'payroll',
    label: 'Folha Salarial',
    icon: '$',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50'
  }, {
    id: 'approval',
    label: 'Aprovações do Dia',
    icon: '✓',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    badge: approvalQueue.length
  }, {
    id: 'statement',
    label: 'Extrato Bancário',
    icon: '⇅',
    color: 'text-teal-600',
    bg: 'bg-teal-50'
  }];
  var allowedFinSet = finPerms ? new Set(finPerms) : null;
  var MENU_ITEMS = allowedFinSet ? ALL_MENU_ITEMS.filter(function (m) {
    return allowedFinSet.has(m.id);
  }) : ALL_MENU_ITEMS;
  useEffect(function () {
    if (MENU_ITEMS.length > 0 && !MENU_ITEMS.find(function (m) {
      return m.id === tab;
    })) setTab(MENU_ITEMS[0].id);
  }, [finPerms]);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-52 shrink-0 bg-white border-r border-gray-200 flex flex-col py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 pb-3 border-b border-gray-100 mb-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-gray-400 uppercase tracking-widest"
  }, "Financeiro")), MENU_ITEMS.map(function (m) {
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      onClick: function onClick() {
        return setTab(m.id);
      },
      className: "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors mx-2 rounded-lg ".concat(tab === m.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50')
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-6 h-6 rounded flex items-center justify-center text-xs font-bold shrink-0 ".concat(tab === m.id ? 'bg-white/20 text-white' : m.color + ' ' + m.bg)
    }, m.icon), /*#__PURE__*/React.createElement("span", {
      className: "flex-1 text-left"
    }, m.label), m.badge > 0 && /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold px-1.5 py-0.5 rounded-full ".concat(tab === m.id ? 'bg-white/25 text-white' : 'bg-red-500 text-white')
    }, m.badge));
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-auto px-4 pt-3 border-t border-gray-100 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-green-50 rounded-lg p-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-green-600"
  }, "A Receber"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-green-700"
  }, fmt(pendingIn))), /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50 rounded-lg p-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-red-600"
  }, "A Pagar"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-red-700"
  }, fmt(pendingOut))))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-5 space-y-4"
  }, tab === 'receivable' && function () {
    var rTot = receivable.reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var rReceived = receivable.filter(function (t) {
      return t.status === 'RECEIVED';
    }).reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var rPending = receivable.filter(function (t) {
      return t.status === 'PENDING';
    }).reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var rOverdue = receivable.filter(function (t) {
      return t.status === 'OVERDUE';
    }).reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var hasFilter = dateFromR || dateToR || statusR !== 'all' || catR !== 'all';
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "border rounded-xl p-4 ".concat(hasFilter ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-100')
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium uppercase tracking-wide ".concat(hasFilter ? 'text-blue-600' : 'text-green-600')
    }, hasFilter ? 'Total Filtrado' : 'Total Receitas'), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold mt-1 ".concat(hasFilter ? 'text-blue-700' : 'text-green-700')
    }, fmt(rTot)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, receivable.length, " lan\xE7amento(s)")), /*#__PURE__*/React.createElement("div", {
      className: "bg-green-50 border border-green-100 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium text-green-600 uppercase tracking-wide"
    }, "Recebidos"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-green-700 mt-1"
    }, fmt(rReceived))), /*#__PURE__*/React.createElement("div", {
      className: "bg-amber-50 border border-amber-100 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium text-amber-600 uppercase tracking-wide"
    }, "Pendentes"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-amber-700 mt-1"
    }, fmt(rPending))), /*#__PURE__*/React.createElement("div", {
      className: "bg-red-50 border border-red-100 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium text-red-600 uppercase tracking-wide"
    }, "Vencidos"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-red-700 mt-1"
    }, fmt(rOverdue)))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 flex-wrap"
    }, /*#__PURE__*/React.createElement("select", {
      value: statusR,
      onChange: function onChange(e) {
        return setStatusR(e.target.value);
      },
      className: "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "all"
    }, "Todos os status"), /*#__PURE__*/React.createElement("option", {
      value: "PENDING"
    }, "Pendente"), /*#__PURE__*/React.createElement("option", {
      value: "RECEIVED"
    }, "Recebido"), /*#__PURE__*/React.createElement("option", {
      value: "OVERDUE"
    }, "Vencido")), /*#__PURE__*/React.createElement("select", {
      value: catR,
      onChange: function onChange(e) {
        return setCatR(e.target.value);
      },
      className: "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "all"
    }, "Todas as categorias"), incomeCats.map(function (c) {
      return /*#__PURE__*/React.createElement("option", {
        key: c.id || c,
        value: c.name || c
      }, c.name || c);
    })), /*#__PURE__*/React.createElement(DateFilter, {
      from: dateFromR,
      setFrom: setDateFromR,
      to: dateToR,
      setTo: setDateToR
    }), hasFilter && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setDateFromR('');
        setDateToR('');
        setStatusR('all');
        setCatR('all');
      },
      className: "text-xs text-gray-400 hover:text-red-500 px-2 py-1 border border-gray-200 rounded-lg"
    }, "Limpar filtros"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setImportModal('INCOME');
      },
      className: "flex items-center gap-1.5 text-sm border border-gray-200 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50"
    }, "\u2191 Importar planilha"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setNewTx({
          type: 'INCOME',
          description: '',
          amount: '',
          due_date: '',
          category_id: '',
          bank_account_id: '',
          payment_method_id: ''
        });
        setNewTxModal(true);
      },
      className: "ml-auto flex items-center gap-1.5 bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      className: "w-4 h-4"
    }), " Novo Recebimento")), /*#__PURE__*/React.createElement(TxTable, {
      txList: receivable,
      btnLabel: "Baixar",
      onSettle: settle,
      onUpdate: function (updated) {
        setTx(function (prev) {
          return prev.map(function (t) {
            return t.id !== updated.id ? t : updated;
          });
        });
      }
    }));
  }(), tab === 'payable' && function () {
    var pTot = payable.reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var pPaid = payable.filter(function (t) {
      return t.status === 'PAID';
    }).reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var pPend = payable.filter(function (t) {
      return t.status === 'PENDING';
    }).reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var pOver = payable.filter(function (t) {
      return t.status === 'OVERDUE';
    }).reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var hasFilter = dateFromP || dateToP || statusP !== 'all' || catP !== 'all';
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "border rounded-xl p-4 ".concat(hasFilter ? 'bg-blue-50 border-blue-200' : 'bg-red-50 border-red-100')
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium uppercase tracking-wide ".concat(hasFilter ? 'text-blue-600' : 'text-red-600')
    }, hasFilter ? 'Total Filtrado' : 'Total Despesas'), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold mt-1 ".concat(hasFilter ? 'text-blue-700' : 'text-red-700')
    }, fmt(pTot)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, payable.length, " lan\xE7amento(s)")), /*#__PURE__*/React.createElement("div", {
      className: "bg-green-50 border border-green-100 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium text-green-600 uppercase tracking-wide"
    }, "Pagos"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-green-700 mt-1"
    }, fmt(pPaid))), /*#__PURE__*/React.createElement("div", {
      className: "bg-amber-50 border border-amber-100 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium text-amber-600 uppercase tracking-wide"
    }, "Pendentes"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-amber-700 mt-1"
    }, fmt(pPend))), /*#__PURE__*/React.createElement("div", {
      className: "bg-orange-50 border border-orange-100 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium text-orange-600 uppercase tracking-wide"
    }, "Vencidos"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-orange-700 mt-1"
    }, fmt(pOver)))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 flex-wrap"
    }, /*#__PURE__*/React.createElement("select", {
      value: statusP,
      onChange: function onChange(e) {
        return setStatusP(e.target.value);
      },
      className: "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "all"
    }, "Todos os status"), /*#__PURE__*/React.createElement("option", {
      value: "PENDING"
    }, "Pendente"), /*#__PURE__*/React.createElement("option", {
      value: "PAID"
    }, "Pago"), /*#__PURE__*/React.createElement("option", {
      value: "OVERDUE"
    }, "Vencido")), /*#__PURE__*/React.createElement("select", {
      value: catP,
      onChange: function onChange(e) {
        return setCatP(e.target.value);
      },
      className: "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "all"
    }, "Todas as categorias"), expenseCats.map(function (c) {
      return /*#__PURE__*/React.createElement("option", {
        key: c.id || c,
        value: c.name || c
      }, c.name || c);
    })), /*#__PURE__*/React.createElement(DateFilter, {
      from: dateFromP,
      setFrom: setDateFromP,
      to: dateToP,
      setTo: setDateToP
    }), hasFilter && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setDateFromP('');
        setDateToP('');
        setStatusP('all');
        setCatP('all');
      },
      className: "text-xs text-gray-400 hover:text-red-500 px-2 py-1 border border-gray-200 rounded-lg"
    }, "Limpar filtros"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setImportModal('EXPENSE');
      },
      className: "flex items-center gap-1.5 text-sm border border-gray-200 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50"
    }, "\u2191 Importar planilha"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setNewTx({
          type: 'EXPENSE',
          description: '',
          amount: '',
          due_date: '',
          category_id: '',
          bank_account_id: '',
          payment_method_id: ''
        });
        setNewTxModal(true);
      },
      className: "ml-auto flex items-center gap-1.5 bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-700"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      className: "w-4 h-4"
    }), " Nova Despesa")), /*#__PURE__*/React.createElement(TxTable, {
      txList: payable,
      btnLabel: "Pagar",
      onSettle: settle,
      onUpdate: function (updated) {
        setTx(function (prev) {
          return prev.map(function (t) {
            return t.id !== updated.id ? t : updated;
          });
        });
      }
    }));
  }(), tab === 'cashflow' && function () {
    var catMap = {};
    incomeCats.forEach(function (c) {
      return catMap[c.id] = c;
    });
    expenseCats.forEach(function (c) {
      return catMap[c.id] = c;
    });
    var getCls = function getCls(t) {
      var _catMap$t$category_id;
      return ((_catMap$t$category_id = catMap[t.category_id]) === null || _catMap$t$category_id === void 0 ? void 0 : _catMap$t$category_id.accounting_class) || (t.type === 'INCOME' ? 'OUTRAS_RECEITAS' : 'OUTRAS_DESPESAS');
    };
    var now = new Date();
    var defaultFrom = "".concat(now.getFullYear(), "-").concat(String(now.getMonth() + 1).padStart(2, '0'), "-01");
    var defaultTo = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
    var from = dateFromCF || defaultFrom;
    var to = dateToCF || defaultTo;
    var txP = transactions.filter(function (t) {
      var d = t.due_date || '';
      return d >= from && d <= to;
    });
    var sumCls = function sumCls(type) {
      for (var _len = arguments.length, cls = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        cls[_key - 1] = arguments[_key];
      }
      return txP.filter(function (t) {
        return t.type === type && cls.includes(getCls(t));
      }).reduce(function (s, t) {
        return s + t.amount;
      }, 0);
    };
    var recClientes = sumCls('INCOME', 'RECEITA_SERVICO', 'RECEITA_CONTRATO', 'OUTRAS_RECEITAS');
    var pagCSP = sumCls('EXPENSE', 'CSP');
    var pagPessoal = sumCls('EXPENSE', 'DESPESA_PESSOAL');
    var pagAdmin = sumCls('EXPENSE', 'DESPESA_ADMINISTRATIVA', 'DESPESA_COMERCIAL');
    var pagImpostos = sumCls('EXPENSE', 'IMPOSTO_RECEITA', 'IMPOSTO_RENDA');
    var pagOutOp = sumCls('EXPENSE', 'OUTRAS_DESPESAS', 'DEPRECIACAO');
    var caixaOper = recClientes - pagCSP - pagPessoal - pagAdmin - pagImpostos - pagOutOp;
    var recAtivos = sumCls('INCOME', 'RECEITA_INVESTIMENTO');
    var pagAtivos = sumCls('EXPENSE', 'INVESTIMENTO');
    var caixaInv = recAtivos - pagAtivos;
    var recFin = sumCls('INCOME', 'FINANCIAMENTO_ENTRADA');
    var pagFin = sumCls('EXPENSE', 'FINANCIAMENTO_SAIDA', 'DESPESA_FINANCEIRA');
    var caixaFin = recFin - pagFin;
    var varLiq = caixaOper + caixaInv + caixaFin;
    var saldoInicial = bankAccounts.reduce(function (s, b) {
      return s + (b.initial_balance || 0);
    }, 0);
    var saldoFinal = saldoInicial + varLiq;
    var dailyRows = projectedFlow();
    var fv = function fv(v) {
      return v === 0 ? '—' : v < 0 ? "(".concat(fmt(Math.abs(v)), ")") : fmt(v);
    };
    var sfv = function sfv(v) {
      return v === 0 ? '—' : (v > 0 ? '+' : '') + fmt(v);
    };
    var cfLabel = from.slice(0, 7) === to.slice(0, 7) ? monthLabel(from.slice(0, 7)) : "".concat(from.slice(8, 10), "/").concat(from.slice(5, 7), " \u2014 ").concat(to.slice(8, 10), "/").concat(to.slice(5, 7), "/").concat(to.slice(0, 4));
    var SH = function SH(_ref35) {
      var l = _ref35.l;
      return /*#__PURE__*/React.createElement("tr", {
        className: "bg-gray-100 border-t-2 border-gray-300"
      }, /*#__PURE__*/React.createElement("td", {
        colSpan: "2",
        className: "px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider"
      }, l));
    };
    var DR = function DR(_ref36) {
      var l = _ref36.l,
        v = _ref36.v,
        _ref36$ind = _ref36.ind,
        ind = _ref36$ind === void 0 ? 0 : _ref36$ind,
        _ref36$tot = _ref36.tot,
        tot = _ref36$tot === void 0 ? false : _ref36$tot;
      var pl = ['', 'pl-6', 'pl-10'][ind] || 'pl-6';
      var bg = tot ? 'bg-gray-50 border-t border-gray-200' : 'hover:bg-gray-50 border-t border-gray-100';
      var tw = tot ? 'text-gray-800 font-semibold text-sm' : 'text-gray-600 text-sm';
      var vw = tot ? v >= 0 ? 'text-green-800 font-semibold' : 'text-red-700 font-semibold' : v >= 0 ? 'text-green-700' : 'text-red-500';
      return /*#__PURE__*/React.createElement("tr", {
        className: bg
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 ".concat(tw, " ").concat(pl)
      }, l), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 text-right whitespace-nowrap text-sm ".concat(vw)
      }, fv(v)));
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 flex-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-sm font-bold text-gray-800"
    }, "DFC \u2014 Demonstra\xE7\xE3o dos Fluxos de Caixa"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "M\xE9todo Direto \xB7 CPC 03 \xB7 Base: lan\xE7amentos por vencimento")), /*#__PURE__*/React.createElement("span", {
      className: "text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-lg font-medium"
    }, cfLabel), /*#__PURE__*/React.createElement(DateFilter, {
      from: dateFromCF,
      setFrom: setDateFromCF,
      to: dateToCF,
      setTo: setDateToCF
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-3"
    }, [{
      l: 'Atividades Operacionais',
      v: caixaOper,
      info: 'dfc-oper',
      sub: 'Operação principal',
      pos: 'bg-green-50 border-green-200 text-green-800',
      neg: 'bg-red-50 border-red-200 text-red-800'
    }, {
      l: 'Atividades de Investimento',
      v: caixaInv,
      info: 'dfc-inv',
      sub: 'Ativos e imobilizado',
      pos: 'bg-blue-50 border-blue-200 text-blue-800',
      neg: 'bg-orange-50 border-orange-200 text-orange-800'
    }, {
      l: 'Atividades de Financiamento',
      v: caixaFin,
      info: 'dfc-fin',
      sub: 'Empréstimos e aportes',
      pos: 'bg-purple-50 border-purple-200 text-purple-800',
      neg: 'bg-amber-50 border-amber-200 text-amber-800'
    }, {
      l: 'Variação Líquida de Caixa',
      v: varLiq,
      info: 'dfc-var',
      sub: cfLabel,
      pos: 'bg-teal-50 border-teal-200 text-teal-800',
      neg: 'bg-rose-50 border-rose-200 text-rose-800'
    }].map(function (k, i) {
      var cls = k.v >= 0 ? k.pos : k.neg;
      var _cls$split = cls.split(' '),
        _cls$split2 = _slicedToArray(_cls$split, 3),
        bg = _cls$split2[0],
        bdr = _cls$split2[1],
        tc = _cls$split2[2];
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "".concat(bg, " border ").concat(bdr, " rounded-xl p-4")
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between gap-1 mb-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold uppercase tracking-wide ".concat(tc)
      }, k.l), /*#__PURE__*/React.createElement(InfoBtn, {
        id: k.info
      })), /*#__PURE__*/React.createElement("p", {
        className: "text-xl font-bold ".concat(tc)
      }, sfv(k.v)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 mt-0.5"
      }, k.sub));
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, "Saldo Inicial do Per\xEDodo"), /*#__PURE__*/React.createElement(InfoBtn, {
      id: "dfc-ini"
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, "Configurado em Configura\xE7\xF5es \u2192 Contas e Saldos")), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-bold text-gray-700 ml-4"
    }, fmt(saldoInicial))), /*#__PURE__*/React.createElement("div", {
      className: "border rounded-xl p-4 flex items-center justify-between ".concat(saldoFinal >= 0 ? 'bg-teal-50 border-teal-200' : 'bg-rose-50 border-rose-200')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold uppercase tracking-wide ".concat(saldoFinal >= 0 ? 'text-teal-600' : 'text-rose-600')
    }, "Saldo Final Projetado"), /*#__PURE__*/React.createElement(InfoBtn, {
      id: "dfc-fin2"
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, "Saldo Inicial + Varia\xE7\xE3o L\xEDquida de Caixa")), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-bold ml-4 ".concat(saldoFinal >= 0 ? 'text-teal-800' : 'text-rose-800')
    }, fmt(saldoFinal)))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      className: "bg-gray-100 border-b-2 border-gray-300"
    }, /*#__PURE__*/React.createElement("th", {
      className: "px-4 py-2.5 text-left text-xs font-bold text-gray-600 uppercase tracking-wide"
    }, "Demonstra\xE7\xE3o dos Fluxos de Caixa \u2014 ", cfLabel), /*#__PURE__*/React.createElement("th", {
      className: "px-4 py-2.5 text-right text-xs font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
    }, "Valor (R$)"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(SH, {
      l: "1. Atividades Operacionais"
    }), recClientes > 0 && /*#__PURE__*/React.createElement(DR, {
      l: "(+) Recebimentos de Clientes \u2014 Servi\xE7os e Contratos",
      v: recClientes,
      ind: 1
    }), pagCSP > 0 && /*#__PURE__*/React.createElement(DR, {
      l: "(-) Pagamentos de Custo dos Servi\xE7os (CSP)",
      v: -pagCSP,
      ind: 1
    }), pagPessoal > 0 && /*#__PURE__*/React.createElement(DR, {
      l: "(-) Pagamentos de Pessoal",
      v: -pagPessoal,
      ind: 1
    }), pagAdmin > 0 && /*#__PURE__*/React.createElement(DR, {
      l: "(-) Despesas Administrativas e Comerciais",
      v: -pagAdmin,
      ind: 1
    }), pagImpostos > 0 && /*#__PURE__*/React.createElement(DR, {
      l: "(-) Impostos Pagos (ISS, PIS, COFINS, IR/CSLL)",
      v: -pagImpostos,
      ind: 1
    }), pagOutOp > 0 && /*#__PURE__*/React.createElement(DR, {
      l: "(-) Outros Pagamentos Operacionais",
      v: -pagOutOp,
      ind: 1
    }), recClientes === 0 && pagCSP === 0 && pagPessoal === 0 && pagAdmin === 0 && pagImpostos === 0 && pagOutOp === 0 && /*#__PURE__*/React.createElement("tr", {
      className: "border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: "2",
      className: "px-4 py-3 text-xs text-gray-400 text-center"
    }, "Nenhum lan\xE7amento operacional \u2014 adicione receitas e despesas com as categorias corretas")), /*#__PURE__*/React.createElement(DR, {
      l: "(=) Caixa L\xEDquido das Atividades Operacionais",
      v: caixaOper,
      tot: true
    }), /*#__PURE__*/React.createElement(SH, {
      l: "2. Atividades de Investimento"
    }), recAtivos > 0 && /*#__PURE__*/React.createElement(DR, {
      l: "(+) Recebimentos \u2014 Venda de Ativos",
      v: recAtivos,
      ind: 1
    }), pagAtivos > 0 && /*#__PURE__*/React.createElement(DR, {
      l: "(-) Pagamentos \u2014 Compra de Equipamentos / Ve\xEDculos",
      v: -pagAtivos,
      ind: 1
    }), recAtivos === 0 && pagAtivos === 0 && /*#__PURE__*/React.createElement("tr", {
      className: "border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: "2",
      className: "px-4 py-3 text-xs text-gray-400 text-center"
    }, "Nenhum lan\xE7amento de investimento no per\xEDodo")), /*#__PURE__*/React.createElement(DR, {
      l: "(=) Caixa L\xEDquido das Atividades de Investimento",
      v: caixaInv,
      tot: true
    }), /*#__PURE__*/React.createElement(SH, {
      l: "3. Atividades de Financiamento"
    }), recFin > 0 && /*#__PURE__*/React.createElement(DR, {
      l: "(+) Empr\xE9stimos Obtidos / Aportes de Capital",
      v: recFin,
      ind: 1
    }), pagFin > 0 && /*#__PURE__*/React.createElement(DR, {
      l: "(-) Amortiza\xE7\xF5es, Juros e Encargos Financeiros",
      v: -pagFin,
      ind: 1
    }), recFin === 0 && pagFin === 0 && /*#__PURE__*/React.createElement("tr", {
      className: "border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: "2",
      className: "px-4 py-3 text-xs text-gray-400 text-center"
    }, "Nenhum lan\xE7amento de financiamento no per\xEDodo")), /*#__PURE__*/React.createElement(DR, {
      l: "(=) Caixa L\xEDquido das Atividades de Financiamento",
      v: caixaFin,
      tot: true
    }), /*#__PURE__*/React.createElement("tr", {
      className: "border-t-2 ".concat(varLiq >= 0 ? 'bg-blue-700' : 'bg-red-700')
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3.5 text-sm font-bold text-white"
    }, "(=) VARIA\xC7\xC3O L\xCDQUIDA DE CAIXA NO PER\xCDODO"), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3.5 text-sm font-bold text-white text-right"
    }, sfv(varLiq))), saldoInicial > 0 && /*#__PURE__*/React.createElement("tr", {
      className: "bg-gray-50 border-t border-gray-200"
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-2.5 text-sm text-gray-500 pl-6"
    }, "(+) Saldo Inicial das Contas"), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-2.5 text-right text-sm text-gray-700 font-medium"
    }, fmt(saldoInicial))), /*#__PURE__*/React.createElement("tr", {
      className: "border-t-2 ".concat(saldoFinal >= 0 ? 'bg-teal-600' : 'bg-rose-700')
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3.5 text-sm font-bold text-white"
    }, "(=) SALDO FINAL DE CAIXA E EQUIVALENTES"), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3.5 text-sm font-bold text-white text-right"
    }, fmt(saldoFinal)))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-5 py-3.5 border-b border-gray-100 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-semibold text-gray-800"
    }, "Detalhe Di\xE1rio"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, "Movimenta\xE7\xF5es por dia e saldo acumulado no per\xEDodo"))), /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-gray-50 border-b border-gray-200"
    }, /*#__PURE__*/React.createElement("tr", null, ['Data', 'Entradas', 'Saídas', 'Resultado do Dia', 'Saldo Acumulado'].map(function (h, i) {
      return /*#__PURE__*/React.createElement("th", {
        key: h,
        className: "px-4 py-3 text-xs font-semibold uppercase tracking-wide ".concat(i === 0 ? 'text-left text-gray-500' : 'text-right ' + (i === 1 ? 'text-green-600' : i === 2 ? 'text-red-500' : i === 3 ? 'text-gray-500' : 'text-blue-600'))
      }, h);
    }))), /*#__PURE__*/React.createElement("tbody", {
      className: "divide-y divide-gray-100"
    }, dailyRows.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "5",
      className: "px-4 py-8 text-center text-sm text-gray-400"
    }, "Nenhum lan\xE7amento no per\xEDodo selecionado \u2014 adicione receitas e despesas no m\xF3dulo Financeiro")) : dailyRows.map(function (r, i) {
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        className: "hover:bg-gray-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 text-gray-700 font-medium"
      }, r.date), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 text-right font-medium text-green-600"
      }, r.ins > 0 ? fmt(r.ins) : /*#__PURE__*/React.createElement("span", {
        className: "text-gray-300"
      }, "\u2014")), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 text-right font-medium text-red-500"
      }, r.outs > 0 ? fmt(r.outs) : /*#__PURE__*/React.createElement("span", {
        className: "text-gray-300"
      }, "\u2014")), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 text-right"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-semibold ".concat(r.diff >= 0 ? 'text-green-600' : 'text-red-600')
      }, r.diff >= 0 ? '+' : '', fmt(r.diff))), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 text-right"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-bold ".concat(r.balance >= 0 ? 'text-blue-700' : 'text-red-700')
      }, fmt(r.balance))));
    })))));
  }(), tab === 'dre' && function () {
    var curM = drePeriod;
    var prevM = prevMonth(curM);
    var curLabel = monthLabel(curM);
    var prevLabel = monthLabel(prevM);
    var catMap = {};
    incomeCats.forEach(function (c) {
      return catMap[c.id] = c;
    });
    expenseCats.forEach(function (c) {
      return catMap[c.id] = c;
    });
    var getCls = function getCls(t) {
      var _catMap$t$category_id2;
      return ((_catMap$t$category_id2 = catMap[t.category_id]) === null || _catMap$t$category_id2 === void 0 ? void 0 : _catMap$t$category_id2.accounting_class) || (t.type === 'INCOME' ? 'OUTRAS_RECEITAS' : 'OUTRAS_DESPESAS');
    };
    var getCatName = function getCatName(t) {
      var _catMap$t$category_id3;
      return ((_catMap$t$category_id3 = catMap[t.category_id]) === null || _catMap$t$category_id3 === void 0 ? void 0 : _catMap$t$category_id3.name) || 'Sem Categoria';
    };
    var txOfMonth = function txOfMonth(m) {
      return transactions.filter(function (t) {
        return (t.due_date || '').startsWith(m);
      });
    };
    var curTx = txOfMonth(curM);
    var prevTx = txOfMonth(prevM);

    // helpers
    var sumC = function sumC(txList, type) {
      for (var _len2 = arguments.length, cls = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        cls[_key2 - 2] = arguments[_key2];
      }
      return txList.filter(function (t) {
        return t.type === type && cls.includes(getCls(t));
      }).reduce(function (s, t) {
        return s + t.amount;
      }, 0);
    };
    var itemsFor = function itemsFor(type) {
      for (var _len3 = arguments.length, cls = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        cls[_key3 - 1] = arguments[_key3];
      }
      var cg = {},
        pg = {};
      curTx.filter(function (t) {
        return t.type === type && cls.includes(getCls(t));
      }).forEach(function (t) {
        var n = getCatName(t);
        cg[n] = (cg[n] || 0) + t.amount;
      });
      prevTx.filter(function (t) {
        return t.type === type && cls.includes(getCls(t));
      }).forEach(function (t) {
        var n = getCatName(t);
        pg[n] = (pg[n] || 0) + t.amount;
      });
      return _toConsumableArray(new Set([].concat(_toConsumableArray(Object.keys(cg)), _toConsumableArray(Object.keys(pg))))).map(function (n) {
        return {
          n: n,
          c: cg[n] || 0,
          p: pg[n] || 0
        };
      }).sort(function (a, b) {
        return b.c - a.c;
      });
    };

    // ── RECEITA BRUTA
    var recBruta = sumC(curTx, 'INCOME', 'RECEITA_SERVICO', 'RECEITA_CONTRATO', 'OUTRAS_RECEITAS');
    var recBrutaP = sumC(prevTx, 'INCOME', 'RECEITA_SERVICO', 'RECEITA_CONTRATO', 'OUTRAS_RECEITAS');
    // ── DEDUÇÕES
    var ded = sumC(curTx, 'EXPENSE', 'IMPOSTO_RECEITA');
    var dedP = sumC(prevTx, 'EXPENSE', 'IMPOSTO_RECEITA');
    var recLiq = recBruta - ded;
    var recLiqP = recBrutaP - dedP;
    // ── CSP
    var csp = sumC(curTx, 'EXPENSE', 'CSP');
    var cspP = sumC(prevTx, 'EXPENSE', 'CSP');
    var lb = recLiq - csp;
    var lbP = recLiqP - cspP;
    // ── DESPESAS OPERACIONAIS
    var dPes = sumC(curTx, 'EXPENSE', 'DESPESA_PESSOAL');
    var dPesP = sumC(prevTx, 'EXPENSE', 'DESPESA_PESSOAL');
    var dAdm = sumC(curTx, 'EXPENSE', 'DESPESA_ADMINISTRATIVA', 'OUTRAS_DESPESAS');
    var dAdmP = sumC(prevTx, 'EXPENSE', 'DESPESA_ADMINISTRATIVA', 'OUTRAS_DESPESAS');
    var dCom = sumC(curTx, 'EXPENSE', 'DESPESA_COMERCIAL');
    var dComP = sumC(prevTx, 'EXPENSE', 'DESPESA_COMERCIAL');
    var totOp = dPes + dAdm + dCom;
    var totOpP = dPesP + dAdmP + dComP;
    var ebit = lb - totOp;
    var ebitP = lbP - totOpP;
    // ── DEPRECIAÇÃO / EBITDA
    var da = sumC(curTx, 'EXPENSE', 'DEPRECIACAO');
    var daP = sumC(prevTx, 'EXPENSE', 'DEPRECIACAO');
    var ebitda = ebit + da;
    var ebitdaP = ebitP + daP;
    // ── RESULTADO FINANCEIRO
    var rFin = sumC(curTx, 'INCOME', 'RECEITA_FINANCEIRA');
    var rFinP = sumC(prevTx, 'INCOME', 'RECEITA_FINANCEIRA');
    var dFin = sumC(curTx, 'EXPENSE', 'DESPESA_FINANCEIRA');
    var dFinP = sumC(prevTx, 'EXPENSE', 'DESPESA_FINANCEIRA');
    var resFinLiq = rFin - dFin;
    var resFinLiqP = rFinP - dFinP;
    // ── LAIR / IR / LL
    var lair = ebit + resFinLiq;
    var lairP = ebitP + resFinLiqP;
    var ir = sumC(curTx, 'EXPENSE', 'IMPOSTO_RENDA');
    var irP = sumC(prevTx, 'EXPENSE', 'IMPOSTO_RENDA');
    var ll = lair - ir;
    var llP = lairP - irP;
    var hasData = curTx.length > 0 || prevTx.length > 0;
    var fv = function fv(v) {
      return v === 0 ? '—' : v < 0 ? "(".concat(fmt(Math.abs(v)), ")") : fmt(v);
    };
    var av = function av(v, base) {
      return base === 0 ? '—' : (v / base * 100).toFixed(1) + '%';
    };
    var vp = function vp(c, p) {
      if (!p) return {
        l: '—',
        u: null
      };
      var d = (c - p) / Math.abs(p) * 100;
      return {
        l: (d > 0 ? '+' : '') + d.toFixed(1) + '%',
        u: d > 0
      };
    };
    var monthOptions = Array.from({
      length: 13
    }, function (_, i) {
      var d = new Date();
      d.setDate(1);
      d.setMonth(d.getMonth() - i);
      return d.toISOString().slice(0, 7);
    });

    // Row components
    var HR = function HR(_ref37) {
      var l = _ref37.l;
      return /*#__PURE__*/React.createElement("tr", {
        className: "bg-gray-100 border-t-2 border-gray-300"
      }, /*#__PURE__*/React.createElement("td", {
        colSpan: "5",
        className: "px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider"
      }, l));
    };
    var SubHR = function SubHR(_ref38) {
      var l = _ref38.l;
      return /*#__PURE__*/React.createElement("tr", {
        className: "bg-gray-50 border-t border-gray-200"
      }, /*#__PURE__*/React.createElement("td", {
        colSpan: "5",
        className: "px-4 py-1.5 text-xs font-semibold text-gray-500 pl-6"
      }, l));
    };
    var IR2 = function IR2(_ref39) {
      var l = _ref39.l,
        c = _ref39.c,
        p = _ref39.p,
        _ref39$neg = _ref39.neg,
        neg = _ref39$neg === void 0 ? false : _ref39$neg,
        _ref39$ind = _ref39.ind,
        ind = _ref39$ind === void 0 ? 1 : _ref39$ind;
      var _vp = vp(c, p),
        vl = _vp.l,
        u = _vp.u;
      var pl = ind === 1 ? 'pl-8' : 'pl-12';
      var cv = neg ? "(".concat(fv(c), ")") : fv(c);
      var pv2 = neg ? "(".concat(fv(p), ")") : fv(p);
      return /*#__PURE__*/React.createElement("tr", {
        className: "hover:bg-gray-50 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2 text-xs text-gray-500 ".concat(pl)
      }, l), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2 text-xs text-right ".concat(neg ? 'text-red-500' : 'text-gray-700')
      }, cv), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2 text-xs text-gray-300 text-right"
      }, "\u2014"), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2 text-xs text-center font-medium ".concat(vl === '—' ? 'text-gray-300' : u === null ? 'text-gray-400' : neg ? u ? 'text-red-500' : 'text-green-600' : u ? 'text-green-600' : 'text-red-500')
      }, vl), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2 text-xs text-right ".concat(neg ? 'text-red-400' : 'text-gray-500')
      }, pv2));
    };
    var STR = function STR(_ref40) {
      var l = _ref40.l,
        c = _ref40.c,
        p = _ref40.p,
        _ref40$base = _ref40.base,
        base = _ref40$base === void 0 ? recLiq : _ref40$base,
        _ref40$neg = _ref40.neg,
        neg = _ref40$neg === void 0 ? false : _ref40$neg;
      var _vp2 = vp(c, p),
        vl = _vp2.l,
        u = _vp2.u;
      var cv = neg ? "(".concat(fv(c), ")") : fv(c);
      var pv2 = neg ? "(".concat(fv(p), ")") : fv(p);
      return /*#__PURE__*/React.createElement("tr", {
        className: "bg-gray-50 border-t border-gray-200"
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 text-xs font-semibold text-gray-700 pl-6"
      }, l), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 text-xs font-semibold text-right ".concat(neg ? 'text-red-600' : 'text-gray-800')
      }, cv), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 text-xs text-gray-400 text-right"
      }, base > 0 ? av(c, base) : '—'), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-xs font-semibold text-center ".concat(vl === '—' ? 'text-gray-300' : u ? 'text-green-600' : 'text-red-500')
      }, vl), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-2.5 text-xs font-medium text-right ".concat(neg ? 'text-red-500' : 'text-gray-600')
      }, pv2));
    };
    var RR = function RR(_ref41) {
      var l = _ref41.l,
        c = _ref41.c,
        p = _ref41.p,
        _ref41$base = _ref41.base,
        base = _ref41$base === void 0 ? recLiq : _ref41$base,
        _ref41$hl = _ref41.hl,
        hl = _ref41$hl === void 0 ? 'green' : _ref41$hl;
      var _vp3 = vp(c, p),
        vl = _vp3.l,
        u = _vp3.u;
      var pos = c >= 0;
      var s = {
        green: {
          bg: pos ? 'bg-green-50' : 'bg-red-50',
          tc: pos ? 'text-green-900' : 'text-red-800',
          vc: pos ? 'text-green-800' : 'text-red-700',
          vp2: pos ? 'text-green-700' : 'text-red-600'
        },
        blue: {
          bg: 'bg-blue-50',
          tc: 'text-blue-900',
          vc: 'text-blue-800',
          vp2: 'text-blue-600'
        },
        navy: {
          bg: 'bg-blue-700',
          tc: 'text-white',
          vc: 'text-white',
          vp2: 'text-blue-200'
        }
      };
      var C = s[hl] || s.green;
      return /*#__PURE__*/React.createElement("tr", {
        className: "border-t-2 border-gray-200 ".concat(C.bg)
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 text-sm font-bold ".concat(C.tc)
      }, l), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 text-sm font-bold text-right ".concat(C.vc)
      }, fv(c)), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 text-xs text-right font-medium ".concat(C.vc)
      }, base > 0 ? av(c, base) : '—'), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3 text-xs font-bold text-center ".concat(vl === '—' ? 'text-gray-300' : u ? 'text-green-500' : 'text-red-400')
      }, vl), /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 text-sm font-semibold text-right ".concat(C.vp2)
      }, fv(p)));
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, hasData && /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-5 gap-3"
    }, [{
      l: 'Receita Líquida',
      c: recLiq,
      p: recLiqP,
      info: 'dre-recliq',
      bg: 'bg-blue-50',
      bdr: 'border-blue-200',
      tc: 'text-blue-700'
    }, {
      l: 'Lucro Bruto',
      c: lb,
      p: lbP,
      info: 'dre-lb',
      bg: 'bg-green-50',
      bdr: 'border-green-200',
      tc: 'text-green-700',
      mg: recLiq > 0 ? av(lb, recLiq) : '—'
    }, {
      l: 'EBIT',
      c: ebit,
      p: ebitP,
      info: 'dre-ebit',
      bg: 'bg-indigo-50',
      bdr: 'border-indigo-200',
      tc: 'text-indigo-700',
      mg: recLiq > 0 ? av(ebit, recLiq) : '—'
    }, {
      l: 'EBITDA',
      c: ebitda,
      p: ebitdaP,
      info: 'dre-ebitda',
      bg: 'bg-teal-50',
      bdr: 'border-teal-200',
      tc: 'text-teal-700',
      mg: recLiq > 0 ? av(ebitda, recLiq) : '—'
    }, {
      l: 'Lucro Líquido',
      c: ll,
      p: llP,
      info: 'dre-ll',
      bg: 'bg-emerald-50',
      bdr: 'border-emerald-200',
      tc: 'text-emerald-700',
      mg: recLiq > 0 ? av(ll, recLiq) : '—'
    }].map(function (k, i) {
      var _vp4 = vp(k.c, k.p),
        vl = _vp4.l,
        u = _vp4.u;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "".concat(k.bg, " border ").concat(k.bdr, " rounded-xl p-3")
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between gap-1 mb-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, k.l), /*#__PURE__*/React.createElement(InfoBtn, {
        id: k.info
      })), /*#__PURE__*/React.createElement("p", {
        className: "text-base font-bold ".concat(k.tc)
      }, fv(k.c)), k.mg && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 mt-0.5"
      }, "Margem: ", /*#__PURE__*/React.createElement("span", {
        className: "font-semibold ".concat(k.tc)
      }, k.mg)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs mt-1 font-medium ".concat(vl === '—' ? 'text-gray-400' : u ? 'text-green-600' : 'text-red-500')
      }, vl, " vs ", prevLabel));
    })), hasData && /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-4"
    }, [{
      l: 'Margem Bruta',
      formula: 'Lucro Bruto / Receita Líquida',
      info: 'mg-bruta',
      c: lb,
      p: lbP
    }, {
      l: 'Margem Operacional',
      formula: 'EBIT / Receita Líquida',
      info: 'mg-oper',
      c: ebit,
      p: ebitP
    }, {
      l: 'Margem Líquida',
      formula: 'Lucro Líquido / Receita Líquida',
      info: 'mg-liq',
      c: ll,
      p: llP
    }].map(function (_ref42) {
      var l = _ref42.l,
        formula = _ref42.formula,
        info = _ref42.info,
        c = _ref42.c,
        p = _ref42.p;
      var pct = recLiq > 0 ? c / recLiq * 100 : null;
      var pctP = recLiqP > 0 ? p / recLiqP * 100 : null;
      var diff = pct !== null && pctP !== null ? pct - pctP : null;
      var good = pct === null ? false : pct >= 0;
      var bar = pct === null ? 0 : Math.min(Math.abs(pct), 100);
      return /*#__PURE__*/React.createElement("div", {
        key: l,
        className: "rounded-xl border p-4 ".concat(good ? 'bg-white border-gray-200' : 'bg-red-50 border-red-200')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between mb-2"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-1.5"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-gray-500 uppercase tracking-wide"
      }, l), /*#__PURE__*/React.createElement(InfoBtn, {
        id: info
      })), /*#__PURE__*/React.createElement("p", {
        className: "text-2xl font-bold mt-0.5 ".concat(pct === null ? 'text-gray-300' : good ? 'text-gray-800' : 'text-red-700')
      }, pct === null ? '—' : "".concat(pct.toFixed(1), "%"))), pct !== null && /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-bold px-2 py-1 rounded-lg mt-0.5 ".concat(good ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700')
      }, good ? '▲ Positiva' : '▼ Negativa')), /*#__PURE__*/React.createElement("div", {
        className: "h-1.5 rounded-full bg-gray-100 mb-2.5 overflow-hidden"
      }, /*#__PURE__*/React.createElement("div", {
        className: "h-full rounded-full transition-all ".concat(good ? 'bg-green-400' : 'bg-red-400'),
        style: {
          width: "".concat(bar, "%")
        }
      })), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, formula), diff !== null && /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-medium mt-1 ".concat(diff > 0 ? 'text-green-600' : diff < 0 ? 'text-red-500' : 'text-gray-400')
      }, diff > 0 ? "\u25B2 +".concat(diff.toFixed(1), " p.p.") : diff < 0 ? "\u25BC ".concat(diff.toFixed(1), " p.p.") : '= sem variação', " vs ", prevLabel, pctP !== null && /*#__PURE__*/React.createElement("span", {
        className: "text-gray-400 font-normal"
      }, " (era ", pctP.toFixed(1), "%)")));
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-5 py-3.5 border-b border-gray-100 flex flex-wrap gap-3 items-center bg-gray-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-800"
    }, "DRE \u2014 Demonstra\xE7\xE3o do Resultado do Exerc\xEDcio"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, curLabel, " \xD7 ", prevLabel, " \xB7 Regime de Compet\xEAncia \xB7 CPC 26 \xB7 Valores em R$")), /*#__PURE__*/React.createElement("select", {
      value: drePeriod,
      onChange: function onChange(e) {
        return setDrePeriod(e.target.value);
      },
      className: "text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
    }, monthOptions.map(function (m) {
      return /*#__PURE__*/React.createElement("option", {
        key: m,
        value: m
      }, monthLabel(m));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-2 border-b border-gray-100 flex gap-2 bg-white"
    }, ['consolidado', 'cliente', 'servico'].map(function(s) {
      return /*#__PURE__*/React.createElement("button", {
        key: s,
        onClick: function() { return setDreSub(s); },
        className: "px-3 py-1.5 text-xs rounded-md font-medium transition-colors " + (dreSub === s ? "bg-blue-600 text-white shadow-sm" : "text-gray-500 hover:bg-gray-100")
      }, s === 'consolidado' ? 'Consolidado' : s === 'cliente' ? 'Por Cliente' : 'Por Tipo de Serviço');
    })), dreSub === 'consolidado' ? !hasData ? /*#__PURE__*/React.createElement("div", {
      className: "px-5 py-12 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-4xl mb-3"
    }, "\uD83D\uDCCB"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-600"
    }, "Nenhum lan\xE7amento em ", curLabel), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-1"
    }, "Adicione receitas e despesas usando as categorias classificadas para gerar a DRE")) : /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      className: "bg-gray-100 border-b-2 border-gray-300"
    }, /*#__PURE__*/React.createElement("th", {
      className: "px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide"
    }, "Descri\xE7\xE3o"), /*#__PURE__*/React.createElement("th", {
      className: "px-4 py-2.5 text-right text-xs font-semibold text-blue-700 uppercase tracking-wide whitespace-nowrap"
    }, curLabel), /*#__PURE__*/React.createElement("th", {
      className: "px-4 py-2.5 text-right text-xs font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap"
    }, "AV%"), /*#__PURE__*/React.createElement("th", {
      className: "px-3 py-2.5 text-center text-xs font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap"
    }, "Var%"), /*#__PURE__*/React.createElement("th", {
      className: "px-4 py-2.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap"
    }, prevLabel))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(HR, {
      l: "Receita Bruta de Servi\xE7os"
    }), itemsFor('INCOME', 'RECEITA_SERVICO', 'RECEITA_CONTRATO', 'OUTRAS_RECEITAS').map(function (_ref43) {
      var n = _ref43.n,
        c = _ref43.c,
        p = _ref43.p;
      return /*#__PURE__*/React.createElement(IR2, {
        key: n,
        l: n,
        c: c,
        p: p
      });
    }), recBruta === 0 && /*#__PURE__*/React.createElement("tr", {
      className: "border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: "5",
      className: "px-4 py-2 text-xs text-gray-400 pl-8"
    }, "Nenhuma receita \u2014 adicione lan\xE7amentos com categorias de receita")), /*#__PURE__*/React.createElement(STR, {
      l: "(=) Receita Bruta Total",
      c: recBruta,
      p: recBrutaP,
      base: recBruta
    }), (ded > 0 || dedP > 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HR, {
      l: "(-) Dedu\xE7\xF5es da Receita Bruta (Impostos sobre Receita)"
    }), itemsFor('EXPENSE', 'IMPOSTO_RECEITA').map(function (_ref44) {
      var n = _ref44.n,
        c = _ref44.c,
        p = _ref44.p;
      return /*#__PURE__*/React.createElement(IR2, {
        key: n,
        l: n,
        c: c,
        p: p,
        neg: true
      });
    }), /*#__PURE__*/React.createElement(STR, {
      l: "Total Dedu\xE7\xF5es",
      c: ded,
      p: dedP,
      base: recBruta,
      neg: true
    })), /*#__PURE__*/React.createElement(RR, {
      l: "(=) RECEITA L\xCDQUIDA DE SERVI\xC7OS",
      c: recLiq,
      p: recLiqP,
      base: recLiq,
      hl: "blue"
    }), (csp > 0 || cspP > 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HR, {
      l: "(-) Custo dos Servi\xE7os Prestados (CSP)"
    }), itemsFor('EXPENSE', 'CSP').map(function (_ref45) {
      var n = _ref45.n,
        c = _ref45.c,
        p = _ref45.p;
      return /*#__PURE__*/React.createElement(IR2, {
        key: n,
        l: n,
        c: c,
        p: p,
        neg: true
      });
    }), /*#__PURE__*/React.createElement(STR, {
      l: "Total CSP",
      c: csp,
      p: cspP,
      neg: true
    })), /*#__PURE__*/React.createElement(RR, {
      l: "(=) LUCRO BRUTO",
      c: lb,
      p: lbP,
      hl: "green"
    }), (totOp > 0 || totOpP > 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HR, {
      l: "(-) Despesas Operacionais"
    }), (dPes > 0 || dPesP > 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SubHR, {
      l: "Despesas com Pessoal"
    }), itemsFor('EXPENSE', 'DESPESA_PESSOAL').map(function (_ref46) {
      var n = _ref46.n,
        c = _ref46.c,
        p = _ref46.p;
      return /*#__PURE__*/React.createElement(IR2, {
        key: n,
        l: n,
        c: c,
        p: p,
        ind: 2,
        neg: true
      });
    }), /*#__PURE__*/React.createElement(STR, {
      l: "Subtotal Pessoal",
      c: dPes,
      p: dPesP,
      neg: true
    })), (dAdm > 0 || dAdmP > 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SubHR, {
      l: "Despesas Gerais e Administrativas (G&A)"
    }), itemsFor('EXPENSE', 'DESPESA_ADMINISTRATIVA', 'OUTRAS_DESPESAS').map(function (_ref47) {
      var n = _ref47.n,
        c = _ref47.c,
        p = _ref47.p;
      return /*#__PURE__*/React.createElement(IR2, {
        key: n,
        l: n,
        c: c,
        p: p,
        ind: 2,
        neg: true
      });
    }), /*#__PURE__*/React.createElement(STR, {
      l: "Subtotal G&A",
      c: dAdm,
      p: dAdmP,
      neg: true
    })), (dCom > 0 || dComP > 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SubHR, {
      l: "Despesas Comerciais"
    }), itemsFor('EXPENSE', 'DESPESA_COMERCIAL').map(function (_ref48) {
      var n = _ref48.n,
        c = _ref48.c,
        p = _ref48.p;
      return /*#__PURE__*/React.createElement(IR2, {
        key: n,
        l: n,
        c: c,
        p: p,
        ind: 2,
        neg: true
      });
    }), /*#__PURE__*/React.createElement(STR, {
      l: "Subtotal Comercial",
      c: dCom,
      p: dComP,
      neg: true
    })), /*#__PURE__*/React.createElement(STR, {
      l: "(=) Total Despesas Operacionais",
      c: totOp,
      p: totOpP,
      neg: true
    })), /*#__PURE__*/React.createElement(RR, {
      l: "(=) EBIT \u2014 Resultado Operacional",
      c: ebit,
      p: ebitP,
      hl: "green"
    }), (da > 0 || daP > 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HR, {
      l: "EBITDA \u2014 Ajuste D&A"
    }), itemsFor('EXPENSE', 'DEPRECIACAO').map(function (_ref49) {
      var n = _ref49.n,
        c = _ref49.c,
        p = _ref49.p;
      return /*#__PURE__*/React.createElement(IR2, {
        key: n,
        l: "(+) D&A add-back \u2014 ".concat(n),
        c: c,
        p: p
      });
    }), /*#__PURE__*/React.createElement(RR, {
      l: "(=) EBITDA",
      c: ebitda,
      p: ebitdaP,
      hl: "blue"
    })), (rFin > 0 || dFin > 0 || rFinP > 0 || dFinP > 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HR, {
      l: "(+/-) Resultado Financeiro"
    }), (rFin > 0 || rFinP > 0) && /*#__PURE__*/React.createElement(IR2, {
      l: "(+) Receitas Financeiras (CDB/Aplica\xE7\xF5es)",
      c: rFin,
      p: rFinP
    }), itemsFor('EXPENSE', 'DESPESA_FINANCEIRA').map(function (_ref50) {
      var n = _ref50.n,
        c = _ref50.c,
        p = _ref50.p;
      return /*#__PURE__*/React.createElement(IR2, {
        key: n,
        l: n,
        c: c,
        p: p,
        neg: true
      });
    }), /*#__PURE__*/React.createElement(STR, {
      l: "Resultado Financeiro L\xEDquido",
      c: resFinLiq,
      p: resFinLiqP,
      neg: resFinLiq < 0
    })), /*#__PURE__*/React.createElement(RR, {
      l: "(=) LAIR \u2014 Lucro Antes do IR e CSLL",
      c: lair,
      p: lairP,
      hl: "green"
    }), (ir > 0 || irP > 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HR, {
      l: "(-) Impostos sobre o Lucro (IR e CSLL)"
    }), itemsFor('EXPENSE', 'IMPOSTO_RENDA').map(function (_ref51) {
      var n = _ref51.n,
        c = _ref51.c,
        p = _ref51.p;
      return /*#__PURE__*/React.createElement(IR2, {
        key: n,
        l: n,
        c: c,
        p: p,
        neg: true
      });
    }), /*#__PURE__*/React.createElement(STR, {
      l: "Total IR e CSLL",
      c: ir,
      p: irP,
      neg: true
    })), /*#__PURE__*/React.createElement("tr", {
      className: "border-t-2 ".concat(ll >= 0 ? 'bg-blue-700' : 'bg-red-700')
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3.5 text-sm font-bold text-white"
    }, "(=) LUCRO L\xCDQUIDO DO EXERC\xCDCIO"), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3.5 text-sm font-bold text-white text-right"
    }, fv(ll)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3.5 text-xs text-right ".concat(ll >= 0 ? 'text-blue-200' : 'text-red-200')
    }, recLiq > 0 ? av(ll, recLiq) : '—'), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-3.5 text-xs font-bold text-center ".concat(vp(ll, llP).u ? 'text-green-300' : 'text-red-300')
    }, vp(ll, llP).l), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3.5 text-sm font-semibold text-right ".concat(ll >= 0 ? 'text-blue-200' : 'text-red-200')
    }, fv(llP))))))
    : dreSub === 'cliente' ? /*#__PURE__*/React.createElement("div", {className:"overflow-x-auto"}, /*#__PURE__*/React.createElement("table", {className:"w-full text-sm"}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {className:"bg-gray-100 border-b-2 border-gray-300"}, /*#__PURE__*/React.createElement("th", {className:"px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide"}, "Cliente"), /*#__PURE__*/React.createElement("th", {className:"px-4 py-2.5 text-right text-xs font-semibold text-green-700 uppercase tracking-wide"}, "Receitas"), /*#__PURE__*/React.createElement("th", {className:"px-4 py-2.5 text-right text-xs font-semibold text-red-600 uppercase tracking-wide"}, "Despesas"), /*#__PURE__*/React.createElement("th", {className:"px-4 py-2.5 text-right text-xs font-semibold text-blue-700 uppercase tracking-wide"}, "Resultado"), /*#__PURE__*/React.createElement("th", {className:"px-4 py-2.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide"}, "% Receita"))), /*#__PURE__*/React.createElement("tbody", null, dreGerencial && dreGerencial.byCustomer && dreGerencial.byCustomer.length > 0 ? dreGerencial.byCustomer.map(function(row) { var res = row.income - row.expense; return /*#__PURE__*/React.createElement("tr", {key: row.id, className: "hover:bg-gray-50 border-t border-gray-100"}, /*#__PURE__*/React.createElement("td", {className: "px-4 py-2.5 text-xs font-medium text-gray-700"}, row.name), /*#__PURE__*/React.createElement("td", {className: "px-4 py-2.5 text-xs text-right text-green-700"}, fmt(row.income)), /*#__PURE__*/React.createElement("td", {className: "px-4 py-2.5 text-xs text-right text-red-600"}, "(", fmt(row.expense), ")"), /*#__PURE__*/React.createElement("td", {className: "px-4 py-2.5 text-xs font-semibold text-right " + (res >= 0 ? "text-blue-700" : "text-red-700")}, res >= 0 ? fmt(res) : "(" + fmt(Math.abs(res)) + ")"), /*#__PURE__*/React.createElement("td", {className: "px-4 py-2.5 text-xs text-right text-gray-500"}, dreGerencial.totals.income > 0 ? (row.income / dreGerencial.totals.income * 100).toFixed(1) + "%" : "—")); }) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {colSpan: "5", className: "px-4 py-8 text-center text-sm text-gray-400"}, "Nenhum lançamento com cliente associado — vincule clientes ao criar lançamentos"))))) : /*#__PURE__*/React.createElement("div", {className:"overflow-x-auto"}, /*#__PURE__*/React.createElement("table", {className:"w-full text-sm"}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {className:"bg-gray-100 border-b-2 border-gray-300"}, /*#__PURE__*/React.createElement("th", {className:"px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide"}, "Tipo de Serviço"), /*#__PURE__*/React.createElement("th", {className:"px-4 py-2.5 text-right text-xs font-semibold text-green-700 uppercase tracking-wide"}, "Receitas"), /*#__PURE__*/React.createElement("th", {className:"px-4 py-2.5 text-right text-xs font-semibold text-red-600 uppercase tracking-wide"}, "Despesas"), /*#__PURE__*/React.createElement("th", {className:"px-4 py-2.5 text-right text-xs font-semibold text-blue-700 uppercase tracking-wide"}, "Resultado"), /*#__PURE__*/React.createElement("th", {className:"px-4 py-2.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide"}, "% Receita"))), /*#__PURE__*/React.createElement("tbody", null, dreGerencial && dreGerencial.byServiceType && dreGerencial.byServiceType.length > 0 ? dreGerencial.byServiceType.map(function(row) { var res = row.income - row.expense; return /*#__PURE__*/React.createElement("tr", {key: row.type, className: "hover:bg-gray-50 border-t border-gray-100"}, /*#__PURE__*/React.createElement("td", {className: "px-4 py-2.5 text-xs font-medium text-gray-700"}, row.type), /*#__PURE__*/React.createElement("td", {className: "px-4 py-2.5 text-xs text-right text-green-700"}, fmt(row.income)), /*#__PURE__*/React.createElement("td", {className: "px-4 py-2.5 text-xs text-right text-red-600"}, "(", fmt(row.expense), ")"), /*#__PURE__*/React.createElement("td", {className: "px-4 py-2.5 text-xs font-semibold text-right " + (res >= 0 ? "text-blue-700" : "text-red-700")}, res >= 0 ? fmt(res) : "(" + fmt(Math.abs(res)) + ")"), /*#__PURE__*/React.createElement("td", {className: "px-4 py-2.5 text-xs text-right text-gray-500"}, dreGerencial && dreGerencial.totals.income > 0 ? (row.income / dreGerencial.totals.income * 100).toFixed(1) + "%" : "—")); }) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {colSpan: "5", className: "px-4 py-8 text-center text-sm text-gray-400"}, "Nenhum lançamento com tipo de serviço — selecione o tipo ao criar lançamentos")))))));
  }(), tab === 'payroll' && function (_PAYROLL_MONTHS$find) {
    var PAYROLL_MONTHS = [['2026-04', 'Abril 2026'], ['2026-03', 'Março 2026'], ['2026-02', 'Fevereiro 2026'], ['2026-01', 'Janeiro 2026']];
    // helpers de cálculo
    var bruto = function bruto(r) {
      return r.base + r.horasExtras + r.adicNoturno + r.periculosidade + r.insalubridade + r.bonus;
    };
    var deducEmp = function deducEmp(r) {
      return r.dINSS + r.dIRRF + r.dVT + r.dPlano;
    };
    var liquido = function liquido(r) {
      return bruto(r) - deducEmp(r);
    }; // valor líquido depositado em conta
    var benefEmp = function benefEmp(r) {
      return r.vt + r.vr + r.planoSaude;
    }; // benefícios custeados pela empresa
    var encargos = function encargos(r) {
      return r.inssPatronal + r.fgts + r.rat + r.sistemaS;
    };
    var provisoes = function provisoes(r) {
      return r.prov13 + r.provFerias + r.fgtsProv;
    };
    var custoTotal = function custoTotal(r) {
      return bruto(r) + benefEmp(r) + encargos(r) + provisoes(r);
    };
    var payrollRows = payroll.filter(function (p) {
      return p.ref === payrollRef;
    });
    var payrollTechIds = new Set(payrollRows.map(function (p) {
      return p.techId;
    }).filter(Boolean));
    var payrollNames = new Set(payrollRows.map(function (p) {
      return (p.name || '').toLowerCase();
    }));
    var techStubs = payTechs.filter(function (t) {
      return !payrollTechIds.has(t.id) && !payrollNames.has((t.name || '').toLowerCase());
    }).map(function (t) {
      return {
        id: "stub-".concat(t.id),
        techId: t.id,
        name: t.name || '—',
        role: t.specialization || 'Técnico de Campo',
        cpf: '',
        admDate: '',
        ref: payrollRef,
        status: 'PENDING',
        base: 0,
        horasExtras: 0,
        adicNoturno: 0,
        periculosidade: 0,
        insalubridade: 0,
        bonus: 0,
        vt: 0,
        vr: 0,
        planoSaude: 0,
        dINSS: 0,
        dIRRF: 0,
        dVT: 0,
        dPlano: 0,
        inssPatronal: 0,
        fgts: 0,
        rat: 0,
        sistemaS: 0,
        prov13: 0,
        provFerias: 0,
        fgtsProv: 0,
        _stub: true
      };
    });
    var rows = [].concat(_toConsumableArray(payrollRows), _toConsumableArray(techStubs));
    var totLiq = rows.reduce(function (s, r) {
      return s + liquido(r);
    }, 0);
    var totCusto = rows.reduce(function (s, r) {
      return s + custoTotal(r);
    }, 0);
    var totBruto = rows.reduce(function (s, r) {
      return s + bruto(r);
    }, 0);
    var totEnc = rows.reduce(function (s, r) {
      return s + encargos(r) + provisoes(r);
    }, 0);
    var payAll = function payAll() {
      setPayroll(function (prev) {
        return prev.map(function (p) {
          return p.ref === payrollRef && !p._stub ? _objectSpread(_objectSpread({}, p), {}, {
            status: 'PAID'
          }) : p;
        });
      });
      setToast('Folha aprovada e paga!');
    };
    var openStubConfig = function openStubConfig(t) {
      setPayForm({
        techId: t.techId,
        name: t.name,
        role: t.role,
        cpf: '',
        admDate: '',
        base: '',
        horasExtras: '',
        adicNoturno: '',
        periculosidade: '',
        insalubridade: '',
        bonus: '',
        vt: '',
        vr: '',
        planoSaude: ''
      });
      setNewPayModal(true);
    };
    var emp = payEmpModal;
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between flex-wrap gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-gray-800"
    }, "Folha Salarial"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, rows.length, " colaborador(es) \xB7 ", (_PAYROLL_MONTHS$find = PAYROLL_MONTHS.find(function (_ref52) {
      var _ref53 = _slicedToArray(_ref52, 1),
        k = _ref53[0];
      return k === payrollRef;
    })) === null || _PAYROLL_MONTHS$find === void 0 ? void 0 : _PAYROLL_MONTHS$find[1])), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 flex-wrap items-center"
    }, /*#__PURE__*/React.createElement("select", {
      value: payrollRef,
      onChange: function onChange(e) {
        return setPayrollRef(e.target.value);
      },
      className: "text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    }, PAYROLL_MONTHS.map(function (_ref54) {
      var _ref55 = _slicedToArray(_ref54, 2),
        k = _ref55[0],
        l = _ref55[1];
      return /*#__PURE__*/React.createElement("option", {
        key: k,
        value: k
      }, l);
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setNewPayModal(true);
      },
      className: "flex items-center gap-1.5 text-sm border border-gray-200 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      className: "w-4 h-4"
    }), " Funcion\xE1rio"), rows.some(function (r) {
      return r.status === 'PENDING';
    }) && /*#__PURE__*/React.createElement("button", {
      onClick: payAll,
      className: "text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-semibold"
    }, "\u2713 Aprovar e Pagar Folha"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-cyan-50 border border-cyan-100 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium text-cyan-600 uppercase tracking-wide"
    }, "Total Bruto"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-cyan-700 mt-1"
    }, fmt(totBruto)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-cyan-500 mt-0.5"
    }, "sal\xE1rios + extras + adicionais + b\xF4nus")), /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 border border-blue-100 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium text-blue-600 uppercase tracking-wide"
    }, "Total L\xEDquido a Pagar"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-blue-700 mt-1"
    }, fmt(totLiq)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-blue-500 mt-0.5"
    }, "bruto \u2212 INSS \u2212 IRRF \u2212 descontos")), /*#__PURE__*/React.createElement("div", {
      className: "bg-red-50 border border-red-100 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium text-red-600 uppercase tracking-wide"
    }, "Encargos + Provis\xF5es"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-red-700 mt-1"
    }, fmt(totEnc)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-red-500 mt-0.5"
    }, "INSS patronal + FGTS + RAT + Sistema S + provis\xF5es")), /*#__PURE__*/React.createElement("div", {
      className: "bg-orange-50 border border-orange-100 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-medium text-orange-600 uppercase tracking-wide"
    }, "Custo Total Empresa"), /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-orange-700 mt-1"
    }, fmt(totCusto)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-orange-500 mt-0.5"
    }, "tudo inclu\xEDdo \xB7 ", totBruto > 0 ? (totCusto / totBruto * 100).toFixed(0) : '—', "% do bruto"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-gray-50 border-b border-gray-200"
    }, /*#__PURE__*/React.createElement("tr", null, ['Funcionário', 'Cargo', 'Salário Bruto', 'Deduções Emp.', 'Líquido a Pagar', 'Benefícios', 'Encargos+Prov.', 'Custo Total', 'Status', ''].map(function (h) {
      return /*#__PURE__*/React.createElement("th", {
        key: h,
        className: "px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap"
      }, h);
    }))), /*#__PURE__*/React.createElement("tbody", {
      className: "divide-y divide-gray-100"
    }, rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "10",
      className: "px-4 py-8 text-center text-sm text-gray-400"
    }, "Nenhum funcion\xE1rio para o per\xEDodo selecionado")), rows.map(function (r) {
      return /*#__PURE__*/React.createElement("tr", {
        key: r.id,
        className: "hover:bg-gray-50 cursor-pointer ".concat(r._stub ? 'opacity-60 bg-gray-50/50' : r.status === 'PAID' ? 'bg-green-50/20' : ''),
        onClick: function onClick() {
          return r._stub ? openStubConfig(r) : setPayEmpModal(r);
        }
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, r.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, r._stub ? 'sem salário configurado' : r.cpf)), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3 text-xs text-gray-500 whitespace-nowrap"
      }, r.role), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3 font-medium text-gray-800"
      }, r._stub ? '—' : fmt(bruto(r))), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3 text-red-500 font-medium"
      }, r._stub ? '—' : "-".concat(fmt(deducEmp(r)))), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3 font-bold text-blue-700"
      }, r._stub ? '—' : fmt(liquido(r))), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3 text-gray-600"
      }, r._stub ? '—' : fmt(benefEmp(r))), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3 text-red-400"
      }, r._stub ? '—' : fmt(encargos(r) + provisoes(r))), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3 font-bold text-orange-700"
      }, r._stub ? '—' : fmt(custoTotal(r))), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3"
      }, r._stub ? /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap bg-gray-100 text-gray-500"
      }, "Sem sal\xE1rio") : /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ".concat(r.status === 'PAID' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700')
      }, r.status === 'PAID' ? '✓ Pago' : 'Pendente')), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-3"
      }, r._stub ? /*#__PURE__*/React.createElement("button", {
        className: "text-xs text-orange-600 hover:underline whitespace-nowrap",
        onClick: function onClick(e) {
          e.stopPropagation();
          openStubConfig(r);
        }
      }, "Configurar \u2192") : /*#__PURE__*/React.createElement("button", {
        className: "text-xs text-blue-600 hover:underline whitespace-nowrap",
        onClick: function onClick(e) {
          e.stopPropagation();
          setPayEmpModal(r);
        }
      }, "Ver detalhes \u2192")));
    })), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-gray-100 border-t-2 border-gray-300"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "2",
      className: "px-3 py-3 text-xs font-bold text-gray-600 uppercase"
    }, "Totais do Per\xEDodo"), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-3 text-xs font-bold text-gray-800"
    }, fmt(totBruto)), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-3 text-xs font-bold text-red-600"
    }, fmt(rows.reduce(function (s, r) {
      return s + deducEmp(r);
    }, 0))), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-3 text-xs font-bold text-blue-700"
    }, fmt(totLiq)), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-3 text-xs font-bold text-gray-600"
    }, fmt(rows.reduce(function (s, r) {
      return s + benefEmp(r);
    }, 0))), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-3 text-xs font-bold text-red-500"
    }, fmt(totEnc)), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-3 text-xs font-bold text-orange-700"
    }, fmt(totCusto)), /*#__PURE__*/React.createElement("td", {
      colSpan: "2"
    }))))), /*#__PURE__*/React.createElement(Modal, {
      open: !!emp,
      onClose: function onClose() {
        return setPayEmpModal(null);
      },
      title: emp ? "".concat(emp.name, " \u2014 Holerite Detalhado") : 'Holerite',
      size: "lg"
    }, emp && function () {
      var Linha = function Linha(_ref56) {
        var l = _ref56.l,
          v = _ref56.v,
          _ref56$cls = _ref56.cls,
          cls = _ref56$cls === void 0 ? 'text-gray-700' : _ref56$cls,
          _ref56$bold = _ref56.bold,
          bold = _ref56$bold === void 0 ? false : _ref56$bold,
          _ref56$indent = _ref56.indent,
          indent = _ref56$indent === void 0 ? false : _ref56$indent,
          _ref56$sep = _ref56.sep,
          sep = _ref56$sep === void 0 ? false : _ref56$sep;
        return /*#__PURE__*/React.createElement("div", {
          className: "flex justify-between items-center py-1.5 ".concat(sep ? 'border-t border-gray-200 mt-1' : 'border-b border-gray-100', " ").concat(indent ? 'pl-4' : '')
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-xs ".concat(bold ? 'font-bold text-gray-800' : 'text-gray-500')
        }, l), /*#__PURE__*/React.createElement("span", {
          className: "text-xs font-semibold ".concat(cls, " ").concat(bold ? 'text-sm' : '')
        }, v));
      };
      var b = bruto(emp),
        ded = deducEmp(emp),
        liq = liquido(emp),
        bef = benefEmp(emp),
        enc = encargos(emp),
        prov = provisoes(emp),
        ct = custoTotal(emp);
      return /*#__PURE__*/React.createElement("div", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4 pb-3 border-b border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white text-lg font-bold"
      }, (emp.name || '?')[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-bold text-gray-800"
      }, emp.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, emp.role, " \xB7 CPF ", emp.cpf, " \xB7 Admiss\xE3o: ", fmtDate(emp.admDate))), /*#__PURE__*/React.createElement("div", {
        className: "ml-auto flex gap-2 flex-wrap"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-semibold px-3 py-1 rounded-full ".concat(emp.status === 'PAID' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700')
      }, emp.status === 'PAID' ? '✓ Pago' : 'Pendente'), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return openEditPay(emp);
        },
        className: "text-xs border border-gray-200 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-50 font-medium"
      }, "\u270F Editar"), emp.status === 'PENDING' && /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setPayroll(function (prev) {
            return prev.map(function (p) {
              return p.id === emp.id ? _objectSpread(_objectSpread({}, p), {}, {
                status: 'PAID'
              }) : p;
            });
          });
          setPayEmpModal(function (prev) {
            return prev ? _objectSpread(_objectSpread({}, prev), {}, {
              status: 'PAID'
            }) : null;
          });
          setToast("Pagamento de ".concat(emp.name, " confirmado!"));
        },
        className: "text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 font-semibold"
      }, "Confirmar Pagamento"))), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-blue-50 rounded-xl p-4"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-bold text-blue-700 uppercase tracking-wide mb-3"
      }, "Proventos e Dedu\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-gray-500 uppercase mb-1"
      }, "Remunera\xE7\xE3o"), /*#__PURE__*/React.createElement(Linha, {
        l: "Sal\xE1rio Base",
        v: fmt(emp.base)
      }), emp.horasExtras > 0 && /*#__PURE__*/React.createElement(Linha, {
        l: "Horas Extras",
        v: fmt(emp.horasExtras),
        cls: "text-green-600",
        indent: true
      }), emp.adicNoturno > 0 && /*#__PURE__*/React.createElement(Linha, {
        l: "Adicional Noturno",
        v: fmt(emp.adicNoturno),
        cls: "text-green-600",
        indent: true
      }), emp.periculosidade > 0 && /*#__PURE__*/React.createElement(Linha, {
        l: "Periculosidade (30%)",
        v: fmt(emp.periculosidade),
        cls: "text-green-600",
        indent: true
      }), emp.insalubridade > 0 && /*#__PURE__*/React.createElement(Linha, {
        l: "Insalubridade",
        v: fmt(emp.insalubridade),
        cls: "text-green-600",
        indent: true
      }), emp.bonus > 0 && /*#__PURE__*/React.createElement(Linha, {
        l: "B\xF4nus / Comiss\xE3o",
        v: fmt(emp.bonus),
        cls: "text-green-600",
        indent: true
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "(=) Total Bruto",
        v: fmt(b),
        bold: true,
        cls: "text-gray-800",
        sep: true
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-gray-500 uppercase mt-3 mb-1"
      }, "Dedu\xE7\xF5es do Empregado"), /*#__PURE__*/React.createElement(Linha, {
        l: "(-) INSS Empregado",
        v: '-' + fmt(emp.dINSS),
        cls: "text-red-500"
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "(-) IRRF",
        v: emp.dIRRF > 0 ? '-' + fmt(emp.dIRRF) : 'Isento',
        cls: emp.dIRRF > 0 ? 'text-red-500' : 'text-gray-400'
      }), emp.dVT > 0 && /*#__PURE__*/React.createElement(Linha, {
        l: "(-) Desconto Vale Transporte",
        v: '-' + fmt(emp.dVT),
        cls: "text-red-400"
      }), emp.dPlano > 0 && /*#__PURE__*/React.createElement(Linha, {
        l: "(-) Desconto Plano Sa\xFAde",
        v: '-' + fmt(emp.dPlano),
        cls: "text-red-400"
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "(=) L\xCDQUIDO A RECEBER",
        v: fmt(liq),
        bold: true,
        cls: "text-blue-700",
        sep: true
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-gray-500 uppercase mt-3 mb-1"
      }, "Benef\xEDcios (empresa paga)"), emp.vt > 0 && /*#__PURE__*/React.createElement(Linha, {
        l: "Vale Transporte",
        v: fmt(emp.vt),
        cls: "text-green-600"
      }), emp.vr > 0 && /*#__PURE__*/React.createElement(Linha, {
        l: "Vale Refei\xE7\xE3o",
        v: fmt(emp.vr),
        cls: "text-green-600"
      }), emp.planoSaude > 0 && /*#__PURE__*/React.createElement(Linha, {
        l: "Plano de Sa\xFAde",
        v: fmt(emp.planoSaude),
        cls: "text-green-600"
      })), /*#__PURE__*/React.createElement("div", {
        className: "bg-orange-50 rounded-xl p-4"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-bold text-orange-700 uppercase tracking-wide mb-3"
      }, "Custo Total para a Empresa"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-gray-500 uppercase mb-1"
      }, "Base de C\xE1lculo"), /*#__PURE__*/React.createElement(Linha, {
        l: "Sal\xE1rio Bruto Total",
        v: fmt(b),
        cls: "text-gray-700"
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "Benef\xEDcios Custeados",
        v: fmt(bef),
        cls: "text-gray-700"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-gray-500 uppercase mt-3 mb-1"
      }, "Encargos Patronais"), /*#__PURE__*/React.createElement(Linha, {
        l: "INSS Patronal (20%)",
        v: fmt(emp.inssPatronal),
        cls: "text-red-500"
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "FGTS (8%)",
        v: fmt(emp.fgts),
        cls: "text-red-500"
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "RAT \u2014 Acidente de Trabalho",
        v: fmt(emp.rat),
        cls: "text-red-400"
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "Sistema S (SENAI/SESC/SEST)",
        v: fmt(emp.sistemaS),
        cls: "text-red-400"
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "Subtotal Encargos",
        v: fmt(enc),
        bold: true,
        sep: true
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-gray-500 uppercase mt-3 mb-1"
      }, "Provis\xF5es Mensais"), /*#__PURE__*/React.createElement(Linha, {
        l: "13\xB0 Sal\xE1rio (1/12)",
        v: fmt(emp.prov13),
        cls: "text-orange-600"
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "F\xE9rias + 1/3 (1/9)",
        v: fmt(emp.provFerias),
        cls: "text-orange-600"
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "FGTS sobre Provis\xF5es",
        v: fmt(emp.fgtsProv),
        cls: "text-orange-500"
      }), /*#__PURE__*/React.createElement(Linha, {
        l: "Subtotal Provis\xF5es",
        v: fmt(prov),
        bold: true,
        sep: true
      }), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 bg-orange-100 rounded-lg p-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-bold text-orange-800"
      }, "CUSTO TOTAL EMPRESA"), /*#__PURE__*/React.createElement("span", {
        className: "text-lg font-bold text-orange-800"
      }, fmt(ct))), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-orange-600 mt-1"
      }, b > 0 ? "".concat((ct / b * 100).toFixed(0), "% do sal\xE1rio bruto \xB7 M\xFAltiplo de ").concat((ct / liq).toFixed(2), "x o l\xEDquido") : '—')))), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-3 gap-3 pt-2 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-blue-50 rounded-lg p-3 text-center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-blue-500"
      }, "Dep\xF3sito em conta"), /*#__PURE__*/React.createElement("p", {
        className: "text-base font-bold text-blue-700 mt-0.5"
      }, fmt(liq))), /*#__PURE__*/React.createElement("div", {
        className: "bg-green-50 rounded-lg p-3 text-center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-green-500"
      }, "Benef\xEDcios"), /*#__PURE__*/React.createElement("p", {
        className: "text-base font-bold text-green-700 mt-0.5"
      }, fmt(bef))), /*#__PURE__*/React.createElement("div", {
        className: "bg-orange-50 rounded-lg p-3 text-center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-orange-500"
      }, "Custo total empresa"), /*#__PURE__*/React.createElement("p", {
        className: "text-base font-bold text-orange-700 mt-0.5"
      }, fmt(ct)))));
    }()), /*#__PURE__*/React.createElement(Modal, {
      open: newPayModal,
      onClose: function onClose() {
        setNewPayModal(false);
        setPayForm({
          techId: '',
          name: '',
          role: 'Técnico de Campo',
          cpf: '',
          admDate: '',
          base: '',
          horasExtras: '',
          adicNoturno: '',
          periculosidade: '',
          insalubridade: '',
          bonus: '',
          vt: '',
          vr: '',
          planoSaude: ''
        });
      },
      title: "Cadastrar Funcion\xE1rio na Folha",
      size: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, payTechs.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "col-span-2"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-xs font-medium text-gray-700 mb-1"
    }, "Selecionar t\xE9cnico cadastrado (opcional)"), /*#__PURE__*/React.createElement("select", {
      value: payForm.techId || '',
      onChange: function onChange(e) {
        var t = payTechs.find(function (x) {
          return x.id === e.target.value;
        });
        if (t) setPayForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            techId: t.id,
            name: t.name || '',
            role: t.specialization || 'Técnico de Campo'
          });
        });else setPayForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            techId: ''
          });
        });
      },
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u2014 Novo funcion\xE1rio manual \u2014"), payTechs.map(function (t) {
      return /*#__PURE__*/React.createElement("option", {
        key: t.id,
        value: t.id
      }, t.name, t.specialization ? " \xB7 ".concat(t.specialization) : '');
    }))), [{
      l: 'Nome *',
      k: 'name',
      ph: 'Nome completo'
    }, {
      l: 'CPF',
      k: 'cpf',
      ph: '000.000.000-00'
    }, {
      l: 'Cargo',
      k: 'role',
      ph: 'Técnico de Campo'
    }, {
      l: 'Data de Admissão',
      k: 'admDate',
      ph: '',
      type: 'date'
    }, {
      l: 'Salário Base (R$) *',
      k: 'base',
      ph: '3500.00',
      type: 'number'
    }, {
      l: 'Horas Extras (R$)',
      k: 'horasExtras',
      ph: '0.00',
      type: 'number'
    }, {
      l: 'Adicional Noturno',
      k: 'adicNoturno',
      ph: '0.00',
      type: 'number'
    }, {
      l: 'Periculosidade',
      k: 'periculosidade',
      ph: '0.00',
      type: 'number'
    }, {
      l: 'Insalubridade',
      k: 'insalubridade',
      ph: '0.00',
      type: 'number'
    }, {
      l: 'Bônus / Comissão',
      k: 'bonus',
      ph: '0.00',
      type: 'number'
    }, {
      l: 'Vale Transporte',
      k: 'vt',
      ph: '150.00',
      type: 'number'
    }, {
      l: 'Vale Refeição',
      k: 'vr',
      ph: '220.00',
      type: 'number'
    }, {
      l: 'Plano de Saúde',
      k: 'planoSaude',
      ph: '180.00',
      type: 'number'
    }].map(function (f) {
      return /*#__PURE__*/React.createElement("div", {
        key: f.k,
        className: f.k === 'name' ? 'col-span-2' : ''
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs font-medium text-gray-700 mb-1"
      }, f.l), /*#__PURE__*/React.createElement("input", {
        type: f.type || 'text',
        value: payForm[f.k] || '',
        onChange: function onChange(e) {
          return setPayForm(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.k, e.target.value));
          });
        },
        placeholder: f.ph,
        className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      }));
    }), /*#__PURE__*/React.createElement("p", {
      className: "col-span-2 text-xs text-gray-400"
    }, "* INSS, IRRF e encargos patronais ser\xE3o calculados automaticamente com base no sal\xE1rio informado."), /*#__PURE__*/React.createElement("div", {
      className: "col-span-2 flex gap-2 pt-2 border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setNewPayModal(false);
        setPayForm({
          techId: '',
          name: '',
          role: 'Técnico de Campo',
          cpf: '',
          admDate: '',
          base: '',
          horasExtras: '',
          adicNoturno: '',
          periculosidade: '',
          insalubridade: '',
          bonus: '',
          vt: '',
          vr: '',
          planoSaude: ''
        });
      },
      className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
        var n, b, ext, an, peri, insal, bon, br, vt, vr, ps, dINSS, dIRRF, dVT, dPlano, techId, _tr$data, tr, entry;
        return _regenerator().w(function (_context19) {
          while (1) switch (_context19.n) {
            case 0:
              if (!(!payForm.name.trim() || !payForm.base)) {
                _context19.n = 1;
                break;
              }
              return _context19.a(2);
            case 1:
              n = function n(k) {
                var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return Math.round(parseFloat(payForm[k] || d) * 100);
              };
              b = n('base'), ext = n('horasExtras'), an = n('adicNoturno'), peri = n('periculosidade'), insal = n('insalubridade'), bon = n('bonus');
              br = b + ext + an + peri + insal + bon;
              vt = n('vt'), vr = n('vr'), ps = n('planoSaude');
              dINSS = Math.round(br * 0.095), dIRRF = br > 400000 ? Math.round((br - 400000) * 0.075) : 0;
              dVT = Math.min(vt, Math.round(b * 0.06)), dPlano = Math.round(ps * 0.25);
              techId = payForm.techId || '';
              if (!(!techId && payForm.name.trim())) {
                _context19.n = 3;
                break;
              }
              _context19.n = 2;
              return api.createTechnician({
                name: payForm.name.trim(),
                specializations: [payForm.role],
                phone: ''
              });
            case 2:
              tr = _context19.v;
              if (tr.success && (_tr$data = tr.data) !== null && _tr$data !== void 0 && _tr$data.id) {
                techId = tr.data.id;
                setPayTechs(function (p) {
                  return [].concat(_toConsumableArray(p), [tr.data]);
                });
              }
            case 3:
              entry = {
                id: Date.now(),
                techId: techId,
                name: payForm.name.trim(),
                role: payForm.role,
                cpf: payForm.cpf,
                admDate: payForm.admDate,
                ref: payrollRef,
                status: 'PENDING',
                base: b,
                horasExtras: ext,
                adicNoturno: an,
                periculosidade: peri,
                insalubridade: insal,
                bonus: bon,
                vt: vt,
                vr: vr,
                planoSaude: ps,
                dINSS: dINSS,
                dIRRF: dIRRF,
                dVT: dVT,
                dPlano: dPlano,
                inssPatronal: Math.round(br * 0.20),
                fgts: Math.round(br * 0.08),
                rat: Math.round(br * 0.02),
                sistemaS: Math.round(br * 0.058),
                prov13: Math.round(br / 12),
                provFerias: Math.round(br / 12 * 1.333),
                fgtsProv: Math.round(br / 12 * 1.333 * 0.08 + br / 12 * 0.08)
              };
              setPayroll(function (prev) {
                return [].concat(_toConsumableArray(prev), [entry]);
              });
              setNewPayModal(false);
              setPayForm({
                techId: '',
                name: '',
                role: 'Técnico de Campo',
                cpf: '',
                admDate: '',
                base: '',
                horasExtras: '',
                adicNoturno: '',
                periculosidade: '',
                insalubridade: '',
                bonus: '',
                vt: '',
                vr: '',
                planoSaude: ''
              });
              setToast("".concat(entry.name, " adicionado \xE0 folha!"));
            case 4:
              return _context19.a(2);
          }
        }, _callee19);
      })),
      className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
    }, "Cadastrar Funcion\xE1rio")))), /*#__PURE__*/React.createElement(Modal, {
      open: !!editPayModal,
      onClose: function onClose() {
        return setEditPayModal(null);
      },
      locked: true,
      title: editPayModal ? "Editar \u2014 ".concat(editPayModal.name) : 'Editar',
      size: "lg"
    }, editPayModal && /*#__PURE__*/React.createElement("div", {
      className: "space-y-5"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3"
    }, "Dados do Funcion\xE1rio"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3"
    }, [{
      l: 'Nome *',
      k: 'name',
      ph: 'Nome completo',
      span: 2
    }, {
      l: 'Cargo',
      k: 'role',
      ph: 'Cargo'
    }, {
      l: 'CPF',
      k: 'cpf',
      ph: '000.000.000-00'
    }, {
      l: 'Data de Admissão',
      k: 'admDate',
      ph: '',
      type: 'date'
    }].map(function (f) {
      return /*#__PURE__*/React.createElement("div", {
        key: f.k,
        className: f.span === 2 ? 'col-span-2' : ''
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs font-medium text-gray-700 mb-1"
      }, f.l), /*#__PURE__*/React.createElement("input", {
        type: f.type || 'text',
        value: editPayForm[f.k] || '',
        onChange: function onChange(e) {
          return setEditPayForm(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.k, e.target.value));
          });
        },
        placeholder: f.ph,
        className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      }));
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-bold text-green-600 uppercase tracking-wide mb-3"
    }, "Remunera\xE7\xE3o (R$)"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-3"
    }, [{
      l: 'Salário Base *',
      k: 'base'
    }, {
      l: 'Horas Extras',
      k: 'horasExtras'
    }, {
      l: 'Adicional Noturno',
      k: 'adicNoturno'
    }, {
      l: 'Periculosidade',
      k: 'periculosidade'
    }, {
      l: 'Insalubridade',
      k: 'insalubridade'
    }, {
      l: 'Bônus / Comissão',
      k: 'bonus'
    }].map(function (f) {
      return /*#__PURE__*/React.createElement("div", {
        key: f.k
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs font-medium text-gray-700 mb-1"
      }, f.l), /*#__PURE__*/React.createElement("input", {
        type: "number",
        step: "0.01",
        value: editPayForm[f.k] || '',
        onChange: function onChange(e) {
          return setEditPayForm(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.k, e.target.value));
          });
        },
        placeholder: "0.00",
        className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
      }));
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-bold text-blue-600 uppercase tracking-wide mb-3"
    }, "Benef\xEDcios (empresa paga)"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-3"
    }, [{
      l: 'Vale Transporte',
      k: 'vt'
    }, {
      l: 'Vale Refeição',
      k: 'vr'
    }, {
      l: 'Plano de Saúde',
      k: 'planoSaude'
    }].map(function (f) {
      return /*#__PURE__*/React.createElement("div", {
        key: f.k
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs font-medium text-gray-700 mb-1"
      }, f.l), /*#__PURE__*/React.createElement("input", {
        type: "number",
        step: "0.01",
        value: editPayForm[f.k] || '',
        onChange: function onChange(e) {
          return setEditPayForm(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.k, e.target.value));
          });
        },
        placeholder: "0.00",
        className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      }));
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-bold text-red-500 uppercase tracking-wide mb-3"
    }, "Dedu\xE7\xF5es do Empregado"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-3"
    }, [{
      l: 'INSS Empregado',
      k: 'dINSS'
    }, {
      l: 'IRRF',
      k: 'dIRRF'
    }, {
      l: 'Desconto VT',
      k: 'dVT'
    }, {
      l: 'Desconto Plano',
      k: 'dPlano'
    }].map(function (f) {
      return /*#__PURE__*/React.createElement("div", {
        key: f.k
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs font-medium text-gray-700 mb-1"
      }, f.l), /*#__PURE__*/React.createElement("input", {
        type: "number",
        step: "0.01",
        value: editPayForm[f.k] || '',
        onChange: function onChange(e) {
          return setEditPayForm(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.k, e.target.value));
          });
        },
        placeholder: "0.00",
        className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      }));
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-bold text-orange-600 uppercase tracking-wide mb-3"
    }, "Encargos Patronais e Provis\xF5es"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-3"
    }, [{
      l: 'INSS Patronal (20%)',
      k: 'inssPatronal'
    }, {
      l: 'FGTS (8%)',
      k: 'fgts'
    }, {
      l: 'RAT',
      k: 'rat'
    }, {
      l: 'Sistema S (5.8%)',
      k: 'sistemaS'
    }, {
      l: 'Provisão 13°',
      k: 'prov13'
    }, {
      l: 'Provisão Férias+1/3',
      k: 'provFerias'
    }, {
      l: 'FGTS s/ Provisões',
      k: 'fgtsProv'
    }].map(function (f) {
      return /*#__PURE__*/React.createElement("div", {
        key: f.k
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs font-medium text-gray-700 mb-1"
      }, f.l), /*#__PURE__*/React.createElement("input", {
        type: "number",
        step: "0.01",
        value: editPayForm[f.k] || '',
        onChange: function onChange(e) {
          return setEditPayForm(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.k, e.target.value));
          });
        },
        placeholder: "0.00",
        className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      }));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 pt-2 border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setEditPayModal(null);
      },
      className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: saveEditPay,
      className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
    }, "Salvar Altera\xE7\xF5es")))));
  }(), tab === 'approval' && function () {
    var queueExp = approvalQueue.filter(function (t) {
      return t.type === 'EXPENSE';
    });
    var queueInc = approvalQueue.filter(function (t) {
      return t.type === 'INCOME';
    });
    var selExp = queueExp.filter(function (t) {
      return approvalSel.has(t.id);
    }).reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var selInc = queueInc.filter(function (t) {
      return approvalSel.has(t.id);
    }).reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var saldoAtual = 12500000;
    var saldoPos = saldoAtual - selExp + selInc;
    var expPaid = transactions.filter(function (t) {
      return t.type === 'EXPENSE' && t.status === 'PAID';
    }).reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var totalExpBase = transactions.filter(function (t) {
      return t.type === 'EXPENSE';
    }).reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var dreImpactPct = totalExpBase > 0 ? (selExp / totalExpBase * 100).toFixed(1) : '0.0';
    var cfTodayOuts = queueExp.reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var cfTodayIns = queueInc.reduce(function (s, t) {
      return s + t.amount;
    }, 0);
    var toggleSel = function toggleSel(id) {
      return setApprovalSel(function (prev) {
        var n = new Set(prev);
        n.has(id) ? n.delete(id) : n.add(id);
        return n;
      });
    };
    var selAll = function selAll() {
      return setApprovalSel(new Set(approvalQueue.map(function (t) {
        return t.id;
      })));
    };
    var selNone = function selNone() {
      return setApprovalSel(new Set());
    };
    var approveSelected = function approveSelected() {
      if (approvalSel.size === 0) return;
      var cnt = approvalSel.size;
      setTx(function (prev) {
        return prev.map(function (t) {
          return approvalSel.has(t.id) ? _objectSpread(_objectSpread({}, t), {}, {
            status: t.type === 'INCOME' ? 'RECEIVED' : 'PAID'
          }) : t;
        });
      });
      setApprovalSel(new Set());
      setToast("".concat(cnt, " lan\xE7amento(s) aprovado(s) com sucesso!"));
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between flex-wrap gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-gray-800"
    }, "Aprova\xE7\xF5es do Dia"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, "05 de abril de 2026 \xB7 ", approvalQueue.length, " lan\xE7amento(s) aguardando aprova\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 flex-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: selAll,
      className: "text-xs text-blue-600 border border-blue-200 px-3 py-1.5 rounded-lg hover:bg-blue-50"
    }, "Selecionar tudo"), approvalSel.size > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: selNone,
      className: "text-xs text-gray-400 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50"
    }, "Limpar"), approvalSel.size > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: approveSelected,
      className: "text-xs bg-violet-600 text-white px-4 py-1.5 rounded-lg hover:bg-violet-700 font-semibold"
    }, "\u2713 Aprovar ", approvalSel.size, " selecionado(s) \u2014 ", fmt(selExp + selInc)))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-5 gap-4 items-start"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-3 space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-3 bg-red-50 border-b border-red-100 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold text-red-700"
    }, "\u2193 Pagamentos a Aprovar"), /*#__PURE__*/React.createElement("span", {
      className: "text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full"
    }, queueExp.length)), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-bold text-red-700"
    }, fmt(cfTodayOuts))), queueExp.length === 0 ? /*#__PURE__*/React.createElement("p", {
      className: "px-4 py-6 text-sm text-gray-400 text-center"
    }, "Nenhum pagamento pendente para hoje") : queueExp.map(function (t) {
      var _bankAccounts$find2, _bankAccounts$find3, _payMethods$find2, _payMethods$find3;
      return /*#__PURE__*/React.createElement("label", {
        key: t.id,
        className: "flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors ".concat(approvalSel.has(t.id) ? 'bg-violet-50 border-violet-100' : '')
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: approvalSel.has(t.id),
        onChange: function onChange() {
          return toggleSel(t.id);
        },
        className: "mt-0.5 w-4 h-4 shrink-0 accent-violet-600"
      }), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-800 font-medium truncate"
      }, t.description || t.desc), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 mt-0.5 flex-wrap"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-gray-400"
      }, txCatName(t)), (((_bankAccounts$find2 = bankAccounts.find(function (b) {
        return b.id === t.bank_account_id;
      })) === null || _bankAccounts$find2 === void 0 ? void 0 : _bankAccounts$find2.name) || t.account) && /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-gray-400"
      }, "\xB7 ", ((_bankAccounts$find3 = bankAccounts.find(function (b) {
        return b.id === t.bank_account_id;
      })) === null || _bankAccounts$find3 === void 0 ? void 0 : _bankAccounts$find3.name) || t.account), (((_payMethods$find2 = payMethods.find(function (m) {
        return m.id === t.payment_method_id;
      })) === null || _payMethods$find2 === void 0 ? void 0 : _payMethods$find2.name) || t.payMethod) && /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-gray-400"
      }, "\xB7 ", ((_payMethods$find3 = payMethods.find(function (m) {
        return m.id === t.payment_method_id;
      })) === null || _payMethods$find3 === void 0 ? void 0 : _payMethods$find3.name) || t.payMethod), /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-medium px-1.5 py-0.5 rounded ".concat(t.status === 'OVERDUE' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700')
      }, t.status === 'OVERDUE' ? 'Vencido' : 'Pendente'), /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-gray-400"
      }, "venc. ", fmtDate(txDue(t))))), /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-bold shrink-0 ".concat(approvalSel.has(t.id) ? 'text-violet-700' : 'text-red-600')
      }, fmt(t.amount)));
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-3 bg-green-50 border-b border-green-100 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold text-green-700"
    }, "\u2191 Recebimentos a Confirmar"), /*#__PURE__*/React.createElement("span", {
      className: "text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full"
    }, queueInc.length)), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-bold text-green-700"
    }, fmt(cfTodayIns))), queueInc.length === 0 ? /*#__PURE__*/React.createElement("p", {
      className: "px-4 py-6 text-sm text-gray-400 text-center"
    }, "Nenhum recebimento pendente para hoje") : queueInc.map(function (t) {
      return /*#__PURE__*/React.createElement("label", {
        key: t.id,
        className: "flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors ".concat(approvalSel.has(t.id) ? 'bg-violet-50 border-violet-100' : '')
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: approvalSel.has(t.id),
        onChange: function onChange() {
          return toggleSel(t.id);
        },
        className: "mt-0.5 w-4 h-4 shrink-0 accent-violet-600"
      }), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-800 font-medium truncate"
      }, t.description || t.desc), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 mt-0.5 flex-wrap"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-gray-400"
      }, txCatName(t)), /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-medium px-1.5 py-0.5 rounded bg-amber-100 text-amber-700"
      }, "Pendente"), /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-gray-400"
      }, "venc. ", fmtDate(txDue(t))))), /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-bold shrink-0 ".concat(approvalSel.has(t.id) ? 'text-violet-700' : 'text-green-600')
      }, fmt(t.amount)));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "col-span-2 space-y-3 sticky top-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm p-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-800 mb-3 flex items-center gap-2"
    }, "Impacto no Caixa", approvalSel.size > 0 && /*#__PURE__*/React.createElement("span", {
      className: "text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full font-medium"
    }, "simula\xE7\xE3o ativa")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center py-2 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "Saldo atual"), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold text-gray-800"
    }, fmt(saldoAtual))), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center py-2 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "(+) Recebimentos confirmados"), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold ".concat(selInc > 0 ? 'text-green-600' : 'text-gray-300')
    }, selInc > 0 ? '+' + fmt(selInc) : '—')), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center py-2 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "(\u2212) Pagamentos aprovados"), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold ".concat(selExp > 0 ? 'text-red-600' : 'text-gray-300')
    }, selExp > 0 ? '−' + fmt(selExp) : '—')), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center py-2.5 mt-1 rounded-lg px-2 ".concat(approvalSel.size > 0 ? 'bg-violet-50' : 'bg-gray-50')
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-gray-700"
    }, "Saldo p\xF3s-aprova\xE7\xE3o"), /*#__PURE__*/React.createElement("span", {
      className: "text-base font-bold ".concat(saldoPos > saldoAtual ? 'text-green-700' : saldoPos >= 10000000 ? 'text-blue-700' : 'text-red-700')
    }, fmt(saldoPos))), approvalSel.size > 0 && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-center pt-2 font-medium ".concat(saldoPos < saldoAtual ? 'text-red-500' : 'text-green-600')
    }, saldoPos < saldoAtual ? "\u25BC Redu\xE7\xE3o de ".concat(fmt(saldoAtual - saldoPos), " no caixa") : "\u25B2 Aumento de ".concat(fmt(saldoPos - saldoAtual), " no caixa")))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm p-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-800 mb-3"
    }, "Impacto no DRE"), approvalSel.size === 0 ? /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 text-center py-2"
    }, "Selecione lan\xE7amentos para simular") : /*#__PURE__*/React.createElement("div", {
      className: "space-y-0 text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between py-2 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-500"
    }, "Despesas pagas (atual)"), /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-gray-700"
    }, fmt(expPaid))), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between py-2 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-500"
    }, "(+) Aprova\xE7\xF5es selecionadas"), /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-red-500"
    }, selExp > 0 ? '+' + fmt(selExp) : '—')), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between py-2 border-b-2 border-violet-200"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-gray-700"
    }, "Despesas pagas (simulado)"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-red-700"
    }, fmt(expPaid + selExp))), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between py-2 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-500"
    }, "Impacto no resultado"), /*#__PURE__*/React.createElement("span", {
      className: "font-semibold ".concat(selExp > 0 ? 'text-red-600' : 'text-gray-400')
    }, selExp > 0 ? '−' + fmt(selExp) : '—')), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between py-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-500"
    }, "% sobre total de despesas"), /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-gray-600"
    }, dreImpactPct, "%")))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm p-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-800 mb-3"
    }, "Fluxo de Caixa \u2014 Hoje (05/04)"), /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      className: "border-b border-gray-200"
    }, /*#__PURE__*/React.createElement("th", {
      className: "py-1.5 text-left text-gray-400 font-medium"
    }), /*#__PURE__*/React.createElement("th", {
      className: "py-1.5 text-right text-gray-400 font-medium"
    }, "Sem aprova\xE7\xE3o"), /*#__PURE__*/React.createElement("th", {
      className: "py-1.5 text-right text-violet-600 font-bold"
    }, "Com aprova\xE7\xE3o"))), /*#__PURE__*/React.createElement("tbody", {
      className: "divide-y divide-gray-100"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "py-2 text-gray-500"
    }, "Entradas"), /*#__PURE__*/React.createElement("td", {
      className: "py-2 text-right text-green-600 font-medium"
    }, cfTodayIns > 0 ? fmt(cfTodayIns) : '—'), /*#__PURE__*/React.createElement("td", {
      className: "py-2 text-right font-bold text-green-700"
    }, selInc > 0 ? fmt(selInc) : cfTodayIns > 0 ? fmt(cfTodayIns) : '—')), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "py-2 text-gray-500"
    }, "Sa\xEDdas"), /*#__PURE__*/React.createElement("td", {
      className: "py-2 text-right text-red-500 font-medium"
    }, cfTodayOuts > 0 ? fmt(cfTodayOuts) : '—'), /*#__PURE__*/React.createElement("td", {
      className: "py-2 text-right font-bold text-red-700"
    }, selExp > 0 ? fmt(selExp) : '—')), /*#__PURE__*/React.createElement("tr", {
      className: "border-t-2 border-gray-200"
    }, /*#__PURE__*/React.createElement("td", {
      className: "py-2 font-semibold text-gray-700"
    }, "Resultado do dia"), /*#__PURE__*/React.createElement("td", {
      className: "py-2 text-right font-semibold ".concat(cfTodayIns - cfTodayOuts >= 0 ? 'text-green-600' : 'text-red-600')
    }, fmt(cfTodayIns - cfTodayOuts)), /*#__PURE__*/React.createElement("td", {
      className: "py-2 text-right font-bold ".concat(selInc - selExp >= 0 ? 'text-green-700' : 'text-red-700')
    }, fmt(selInc - selExp))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "py-2 font-semibold text-gray-700"
    }, "Saldo final"), /*#__PURE__*/React.createElement("td", {
      className: "py-2 text-right font-semibold text-gray-600"
    }, fmt(saldoAtual + cfTodayIns - cfTodayOuts)), /*#__PURE__*/React.createElement("td", {
      className: "py-2 text-right font-bold ".concat(saldoPos >= saldoAtual ? 'text-green-700' : saldoPos >= 10000000 ? 'text-blue-700' : 'text-red-700')
    }, fmt(saldoPos)))))))));
  }(), tab === 'statement' && function () {
    var done = stmtLines.filter(function (l) {
      var _stmtResults$l$id2;
      return ((_stmtResults$l$id2 = stmtResults[l.id]) === null || _stmtResults$l$id2 === void 0 ? void 0 : _stmtResults$l$id2.action) === 'imported';
    }).length;
    var ignored = stmtLines.filter(function (l) {
      var _stmtResults$l$id3;
      return ((_stmtResults$l$id3 = stmtResults[l.id]) === null || _stmtResults$l$id3 === void 0 ? void 0 : _stmtResults$l$id3.action) === 'ignore';
    }).length;
    var dups = stmtLines.filter(function (l) {
      var r = stmtResults[l.id];
      return r && r.action === 'duplicate';
    }).length;
    var pending = stmtLines.filter(function (l) {
      var _stmtResults$l$id4;
      return !((_stmtResults$l$id4 = stmtResults[l.id]) !== null && _stmtResults$l$id4 !== void 0 && _stmtResults$l$id4.action);
    }).length;
    var totalC = stmtLines.filter(function (l) {
      return l.type === 'CREDIT';
    }).reduce(function (s, l) {
      return s + l.amount;
    }, 0);
    var totalD = stmtLines.filter(function (l) {
      return l.type === 'DEBIT';
    }).reduce(function (s, l) {
      return s + l.amount;
    }, 0);
    var pct = stmtLines.length ? Math.round(done / stmtLines.length * 100) : 0;
    if (stmtLines.length === 0) return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center gap-6 py-16",
      onDragOver: function onDragOver(e) {
        e.preventDefault();
        setStmtDragging(true);
      },
      onDragLeave: function onDragLeave() {
        return setStmtDragging(false);
      },
      onDrop: function onDrop(e) {
        e.preventDefault();
        setStmtDragging(false);
        loadStmtFile(e.dataTransfer.files[0]);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full max-w-lg rounded-2xl border-2 border-dashed transition-colors flex flex-col items-center gap-4 py-14 px-8 ".concat(stmtDragging ? 'border-teal-400 bg-teal-50' : 'border-gray-300 bg-white')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-3xl"
    }, "\u21C5"), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-gray-800 text-base"
    }, "Arraste o extrato aqui"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400 mt-1"
    }, "Cada linha vira um lan\xE7amento \u2014 voc\xEA s\xF3 categoriza")), /*#__PURE__*/React.createElement("label", {
      className: "cursor-pointer bg-teal-600 text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-teal-700 transition-colors"
    }, "Selecionar arquivo", /*#__PURE__*/React.createElement("input", {
      type: "file",
      className: "hidden",
      accept: ".csv,.ofx,.txt,.ret",
      onChange: function onChange(e) {
        return loadStmtFile(e.target.files[0]);
      }
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 text-center"
    }, "Formatos suportados: ", /*#__PURE__*/React.createElement("strong", null, "OFX"), " (Bradesco, Ita\xFA, Santander, BB) e ", /*#__PURE__*/React.createElement("strong", null, "CSV"), " separado por ; , ou tab")));
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between flex-wrap gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-gray-800"
    }, stmtFileName), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, stmtLines.length, " linhas \xB7 ", done, " importadas \xB7 ", pending, " pendentes")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: importAllStmt,
      className: "px-4 py-1.5 bg-teal-600 text-white rounded-lg text-xs font-medium hover:bg-teal-700"
    }, "Importar todas com categoria"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setStmtLines([]);
        setStmtResults({});
        setStmtCats({});
        setStmtFileName('');
      },
      className: "px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50"
    }, "Novo arquivo"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-5 gap-3"
    }, [{
      l: 'Entradas',
      v: fmt(totalC),
      c: 'text-green-600',
      bg: 'bg-green-50'
    }, {
      l: 'Saídas',
      v: fmt(totalD),
      c: 'text-red-600',
      bg: 'bg-red-50'
    }, {
      l: 'Importados',
      v: done,
      c: 'text-teal-600',
      bg: 'bg-teal-50'
    }, {
      l: 'Poss\xEDveis duplicatas',
      v: dups,
      c: 'text-amber-600',
      bg: 'bg-amber-50'
    }, {
      l: 'Pendentes',
      v: pending,
      c: 'text-gray-600',
      bg: 'bg-gray-50'
    }].map(function (k) {
      return /*#__PURE__*/React.createElement("div", {
        key: k.l,
        className: "".concat(k.bg, " rounded-xl p-3")
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, k.l), /*#__PURE__*/React.createElement("p", {
        className: "text-lg font-bold ".concat(k.c)
      }, k.v));
    })), /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-gray-100 rounded-full h-1.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-teal-500 h-1.5 rounded-full transition-all",
      style: {
        width: "".concat(pct, "%")
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-gray-50 border-b border-gray-200"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "px-3 py-3 text-left text-xs font-semibold text-gray-500 w-24"
    }, "Data"), /*#__PURE__*/React.createElement("th", {
      className: "px-3 py-3 text-left text-xs font-semibold text-gray-500"
    }, "Descri\xE7\xE3o"), /*#__PURE__*/React.createElement("th", {
      className: "px-3 py-3 text-right text-xs font-semibold text-gray-500 w-28"
    }, "Valor"), /*#__PURE__*/React.createElement("th", {
      className: "px-3 py-3 text-left text-xs font-semibold text-gray-500 w-52"
    }, "Categoria"), /*#__PURE__*/React.createElement("th", {
      className: "px-3 py-3 text-center text-xs font-semibold text-gray-500 w-32"
    }, "A\xE7\xE3o"))), /*#__PURE__*/React.createElement("tbody", {
      className: "divide-y divide-gray-100"
    }, stmtLines.map(function (line) {
      var _cats$find;
      var res = stmtResults[line.id] || {};
      var isCredit = line.type === 'CREDIT';
      var cats = isCredit ? incomeCats : expenseCats;
      var catSel = stmtCats[line.id] || '';
      if (res.action === 'imported') return /*#__PURE__*/React.createElement("tr", {
        key: line.id,
        className: "bg-green-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-xs text-gray-400 whitespace-nowrap"
      }, fmtDate(line.date)), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-xs text-gray-500 truncate max-w-xs"
      }, line.description), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-right text-xs font-semibold whitespace-nowrap ".concat(isCredit ? 'text-green-600' : 'text-red-600')
      }, isCredit ? '+' : '−', fmt(line.amount)), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-xs text-gray-400"
      }, ((_cats$find = cats.find(function (c) {
        return c.id === catSel;
      })) === null || _cats$find === void 0 ? void 0 : _cats$find.name) || '—'), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-center text-xs text-green-600 font-medium"
      }, "\u2713 Importado"));
      if (res.action === 'ignore') return /*#__PURE__*/React.createElement("tr", {
        key: line.id,
        className: "opacity-40 bg-gray-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-xs text-gray-400 whitespace-nowrap"
      }, fmtDate(line.date)), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-xs text-gray-500 truncate max-w-xs"
      }, line.description), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-right text-xs whitespace-nowrap ".concat(isCredit ? 'text-green-600' : 'text-red-600')
      }, isCredit ? '+' : '−', fmt(line.amount)), /*#__PURE__*/React.createElement("td", {
        colSpan: 2,
        className: "px-3 py-2.5 text-center text-xs text-gray-400"
      }, "Ignorado", /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setStmtResults(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, line.id, {}));
          });
        },
        className: "ml-2 text-blue-400 hover:text-blue-600"
      }, "desfazer")));
      if (res.action === 'duplicate') return /*#__PURE__*/React.createElement("tr", {
        key: line.id,
        className: "bg-amber-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-xs text-gray-400 whitespace-nowrap"
      }, fmtDate(line.date)), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-xs text-gray-500 truncate max-w-xs"
      }, line.description), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-right text-xs font-semibold whitespace-nowrap ".concat(isCredit ? 'text-green-600' : 'text-red-600')
      }, isCredit ? '+' : '\u2212', fmt(line.amount)), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-xs text-amber-700 font-medium"
      }, "\u26A0\uFE0F Poss\xEDvel duplicata"), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-center gap-1"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setStmtResults(function (p) {
            return Object.assign({}, p, _defineProperty({}, line.id, {}));
          });
        },
        className: "px-2.5 py-1 bg-amber-500 text-white text-xs rounded-lg hover:bg-amber-600 font-medium"
      }, "Importar mesmo assim"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return ignoreStmt(line.id);
        },
        className: "px-2 py-1 border border-gray-200 text-gray-400 text-xs rounded-lg hover:bg-gray-50"
      }, "\u2014"))));
      return /*#__PURE__*/React.createElement("tr", {
        key: line.id,
        className: "hover:bg-gray-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-xs text-gray-500 whitespace-nowrap"
      }, fmtDate(line.date)), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-800 font-medium truncate max-w-xs"
      }, line.description)), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5 text-right font-semibold text-sm whitespace-nowrap ".concat(isCredit ? 'text-green-600' : 'text-red-600')
      }, isCredit ? '+' : '−', fmt(line.amount)), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5"
      }, /*#__PURE__*/React.createElement("select", {
        value: catSel,
        onChange: function onChange(e) {
          return setStmtCats(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, line.id, e.target.value));
          });
        },
        className: "w-full border border-gray-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "Selecionar..."), cats.map(function (c) {
        return /*#__PURE__*/React.createElement("option", {
          key: c.id,
          value: c.id
        }, c.name);
      }))), /*#__PURE__*/React.createElement("td", {
        className: "px-3 py-2.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-center gap-1"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return importStmtLine(line);
        },
        disabled: !catSel,
        className: "px-2.5 py-1 bg-teal-600 text-white text-xs rounded-lg hover:bg-teal-700 font-medium disabled:opacity-40 disabled:cursor-not-allowed"
      }, "Importar"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return ignoreStmt(line.id);
        },
        className: "px-2 py-1 border border-gray-200 text-gray-400 text-xs rounded-lg hover:bg-gray-50"
      }, "\u2014"))));
    })))));
  }(), /*#__PURE__*/React.createElement(Modal, {
    open: !!importModal,
    onClose: function onClose() {
      setImportModal(null);
      setImportText('');
    },
    title: importModal === 'INCOME' ? 'Importar Recebimentos' : 'Importar Despesas',
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-blue-700"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold mb-1"
  }, "Formato esperado (CSV, separado por ; ou tab):"), /*#__PURE__*/React.createElement("p", {
    className: "font-mono"
  }, "Descri\xE7\xE3o; Valor; Vencimento (AAAA-MM-DD); Categoria"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-blue-500"
  }, "Exemplo: Fatura Cliente X; 1500.00; 2026-05-10; Receita de OS")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Cole os dados da planilha aqui:"), /*#__PURE__*/React.createElement("textarea", {
    value: importText,
    onChange: function onChange(e) {
      return setImportText(e.target.value);
    },
    rows: 8,
    placeholder: "Fatura ABC; 2500.00; 2026-05-15; Receita de Contratos\nFatura XYZ; 800.00; 2026-05-20; Receita de OS",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, importText.trim().split('\n').filter(function (l) {
    return l.trim();
  }).length, " linha(s) detectada(s)"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setImportModal(null);
      setImportText('');
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: parseImport,
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Importar ", importText.trim().split('\n').filter(function (l) {
    return l.trim();
  }).length, " lan\xE7amentos")))), /*#__PURE__*/React.createElement(Modal, {
    open: newTxModal,
    onClose: function onClose() {
      return setNewTxModal(false);
    },
    title: newTx.type === 'INCOME' ? 'Novo Recebimento' : 'Nova Despesa',
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, [['INCOME', '↑ Recebimento'], ['EXPENSE', '↓ Despesa']].map(function (_ref58) {
    var _ref59 = _slicedToArray(_ref58, 2),
      v = _ref59[0],
      l = _ref59[1];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setNewTx(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            type: v,
            category_id: ''
          });
        });
      },
      className: "flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ".concat(newTx.type === v ? v === 'INCOME' ? 'bg-green-600 text-white border-green-600' : 'bg-red-600 text-white border-red-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50')
    }, l);
  })), [{
    label: 'Descrição *',
    key: 'description',
    type: 'text',
    placeholder: 'Ex: Fatura Hospital Regional'
  }, {
    label: 'Valor (R$) *',
    key: 'amount',
    type: 'number',
    placeholder: '0,00'
  }, {
    label: 'Vencimento *',
    key: 'due_date',
    type: 'date',
    placeholder: ''
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.key
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.label), /*#__PURE__*/React.createElement("input", {
      type: f.type,
      value: newTx[f.key],
      onChange: function onChange(e) {
        return setNewTx(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
        });
      },
      placeholder: f.placeholder,
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }));
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Categoria"), /*#__PURE__*/React.createElement("select", {
    value: newTx.category_id,
    onChange: function onChange(e) {
      return setNewTx(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          category_id: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Sem categoria"), (newTx.type === 'INCOME' ? incomeCats : expenseCats).map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id || c,
      value: c.id || c
    }, c.name || c);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Conta Banc\xE1ria"), /*#__PURE__*/React.createElement("select", {
    value: newTx.bank_account_id,
    onChange: function onChange(e) {
      return setNewTx(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          bank_account_id: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecionar..."), bankAccounts.map(function (b) {
    return /*#__PURE__*/React.createElement("option", {
      key: b.id,
      value: b.id
    }, b.name || b.bank_name || b.bank, " \u2014 ", b.account_number || b.account || '');
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Forma de Pagamento"), /*#__PURE__*/React.createElement("select", {
    value: newTx.payment_method_id,
    onChange: function onChange(e) {
      return setNewTx(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          payment_method_id: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecionar..."), payMethods.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m.id,
      value: m.id
    }, m.name);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Cliente"), /*#__PURE__*/React.createElement("select", {
    value: newTx.customer_id,
    onChange: function onChange(e) {
      return setNewTx(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, { customer_id: e.target.value });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, /*#__PURE__*/React.createElement("option", { value: "" }, "Sem cliente"), finCustomers.map(function (c) {
    return /*#__PURE__*/React.createElement("option", { key: c.id, value: c.id }, c.name);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Tipo de Servi\xE7o"), /*#__PURE__*/React.createElement("select", {
    value: newTx.service_type,
    onChange: function onChange(e) {
      return setNewTx(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, { service_type: e.target.value });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, /*#__PURE__*/React.createElement("option", { value: "" }, "Sem tipo"), ['Instala\xE7\xE3o', 'Manuten\xE7\xE3o', 'Revis\xE3o', 'Emerg\xEAncia', 'Contrato', 'Avulso'].map(function (s) {
    return /*#__PURE__*/React.createElement("option", { key: s, value: s }, s);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewTxModal(false);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: addTx,
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Salvar Lan\xE7amento")))), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast,
    onClose: function onClose() {
      return setToast(null);
    }
  }), /*#__PURE__*/React.createElement(InfoModal, null)));
};

// ─── INVENTORY ────────────────────────────────────────────────────────────────

var InventoryPage = function InventoryPage() {
  var _inventory$find$qty2, _inventory$find2, _inventory$find$qty3, _inventory$find3;
  var _useState171 = useState(''),
    _useState172 = _slicedToArray(_useState171, 2),
    q = _useState172[0],
    setQ = _useState172[1];
  var _useState173 = useState(false),
    _useState174 = _slicedToArray(_useState173, 2),
    belowMin = _useState174[0],
    setBelowMin = _useState174[1];
  var _useState175 = useState([]),
    _useState176 = _slicedToArray(_useState175, 2),
    inventory = _useState176[0],
    setInventory = _useState176[1];
  var _useState177 = useState(null),
    _useState178 = _slicedToArray(_useState177, 2),
    selected = _useState178[0],
    setSelected = _useState178[1];
  var _useState179 = useState(false),
    _useState180 = _slicedToArray(_useState179, 2),
    newModal = _useState180[0],
    setNewModal = _useState180[1];
  var _useState181 = useState(null),
    _useState182 = _slicedToArray(_useState181, 2),
    adjustModal = _useState182[0],
    setAdjustModal = _useState182[1];
  var _useState183 = useState(''),
    _useState184 = _slicedToArray(_useState183, 2),
    adjustQty = _useState184[0],
    setAdjustQty = _useState184[1];
  var _useState185 = useState('+'),
    _useState186 = _slicedToArray(_useState185, 2),
    adjustDir = _useState186[0],
    setAdjustDir = _useState186[1];
  var _useState187 = useState(''),
    _useState188 = _slicedToArray(_useState187, 2),
    adjustNote = _useState188[0],
    setAdjustNote = _useState188[1];
  var _useState189 = useState(null),
    _useState190 = _slicedToArray(_useState189, 2),
    toast = _useState190[0],
    setToast = _useState190[1];
  var _useState191 = useState({
      sku: '',
      name: '',
      cat: 'Equipamentos',
      qty: '',
      min: '',
      cost: '',
      loc: ''
    }),
    _useState192 = _slicedToArray(_useState191, 2),
    form = _useState192[0],
    setForm = _useState192[1];
  var _useState193 = useState('items'),
    _useState194 = _slicedToArray(_useState193, 2),
    invTab = _useState194[0],
    setInvTab = _useState194[1];
  var _useState195 = useState([]),
    _useState196 = _slicedToArray(_useState195, 2),
    products = _useState196[0],
    setProducts = _useState196[1];
  var _useState197 = useState({
      code: '',
      name: '',
      cat: 'Equipamentos',
      unit: 'un',
      costRef: '',
      desc: ''
    }),
    _useState198 = _slicedToArray(_useState197, 2),
    prodForm = _useState198[0],
    setProdForm = _useState198[1];
  var _useState199 = useState(false),
    _useState200 = _slicedToArray(_useState199, 2),
    newProdModal = _useState200[0],
    setNewProdModal = _useState200[1];
  var normalizeProduct = function normalizeProduct(p) {
    var _ref60, _p$quantity, _ref61, _p$min_quantity, _ref62, _p$quantity2, _ref63, _p$min_quantity2;
    return _objectSpread(_objectSpread({}, p), {}, {
      cat: p.category || p.cat || 'Outros',
      qty: (_ref60 = (_p$quantity = p.quantity) !== null && _p$quantity !== void 0 ? _p$quantity : p.qty) !== null && _ref60 !== void 0 ? _ref60 : 0,
      min: (_ref61 = (_p$min_quantity = p.min_quantity) !== null && _p$min_quantity !== void 0 ? _p$min_quantity : p.min) !== null && _ref61 !== void 0 ? _ref61 : 0,
      cost: p.unit_cost !== undefined ? Math.round(p.unit_cost * 100) : p.cost || 0,
      loc: p.description || p.loc || '',
      belowMin: ((_ref62 = (_p$quantity2 = p.quantity) !== null && _p$quantity2 !== void 0 ? _p$quantity2 : p.qty) !== null && _ref62 !== void 0 ? _ref62 : 0) < ((_ref63 = (_p$min_quantity2 = p.min_quantity) !== null && _p$min_quantity2 !== void 0 ? _p$min_quantity2 : p.min) !== null && _ref63 !== void 0 ? _ref63 : 1),
      code: p.sku || p.code || '',
      unit: p.unit || 'un',
      costRef: p.unit_cost !== undefined ? Math.round(p.unit_cost * 100) : p.costRef || 0,
      desc: p.description || p.desc || ''
    });
  };
  useEffect(function () {
    api.getProducts().then(function (r) {
      if (r.success) {
        var _r$data4;
        var normalized = (((_r$data4 = r.data) === null || _r$data4 === void 0 ? void 0 : _r$data4.data) || r.data || []).map(normalizeProduct);
        setInventory(normalized);
        setProducts(normalized);
      }
    });
  }, []);
  var items = inventory.filter(function (i) {
    return (!q || i.name.toLowerCase().includes(q.toLowerCase()) || i.sku.toLowerCase().includes(q.toLowerCase())) && (!belowMin || i.belowMin);
  });
  var createItem = /*#__PURE__*/function () {
    var _createItem = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
      var result, normalized;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.n) {
          case 0:
            if (!(!form.name || !form.sku)) {
              _context20.n = 1;
              break;
            }
            setToast('Nome e SKU são obrigatórios');
            return _context20.a(2);
          case 1:
            _context20.n = 2;
            return api.createProduct({
              sku: form.sku,
              name: form.name,
              category: form.cat,
              quantity: parseInt(form.qty) || 0,
              min_quantity: parseInt(form.min) || 0,
              unit_cost: parseFloat(form.cost || 0),
              description: form.loc
            });
          case 2:
            result = _context20.v;
            if (result.success) {
              normalized = normalizeProduct(result.data);
              setInventory(function (p) {
                return [normalized].concat(_toConsumableArray(p));
              });
              setProducts(function (p) {
                return [normalized].concat(_toConsumableArray(p));
              });
              setNewModal(false);
              setForm({
                sku: '',
                name: '',
                cat: 'Equipamentos',
                qty: '',
                min: '',
                cost: '',
                loc: ''
              });
              setToast("Item ".concat(form.name, " cadastrado!"));
            } else {
              setToast(result.error || 'Erro ao cadastrar item');
            }
          case 3:
            return _context20.a(2);
        }
      }, _callee20);
    }));
    function createItem() {
      return _createItem.apply(this, arguments);
    }
    return createItem;
  }();
  var doAdjust = /*#__PURE__*/function () {
    var _doAdjust = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
      var _ref64, _inventory$find$qty, _inventory$find;
      var target, qty, curQty, newQty, result, updater;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.n) {
          case 0:
            target = adjustModal || selected;
            if (target) {
              _context21.n = 1;
              break;
            }
            return _context21.a(2);
          case 1:
            qty = parseInt(adjustQty) || 0;
            curQty = (_ref64 = (_inventory$find$qty = (_inventory$find = inventory.find(function (i) {
              return i.id === target.id;
            })) === null || _inventory$find === void 0 ? void 0 : _inventory$find.qty) !== null && _inventory$find$qty !== void 0 ? _inventory$find$qty : target.qty) !== null && _ref64 !== void 0 ? _ref64 : 0;
            newQty = adjustDir === '+' ? curQty + qty : Math.max(0, curQty - qty);
            _context21.n = 2;
            return api.updateProduct(target.id, {
              quantity: newQty
            });
          case 2:
            result = _context21.v;
            if (result.success) {
              updater = function updater(i) {
                return i.id !== target.id ? i : _objectSpread(_objectSpread({}, i), {}, {
                  qty: newQty,
                  quantity: newQty,
                  belowMin: newQty < i.min
                });
              };
              setInventory(function (p) {
                return p.map(updater);
              });
              setToast("Estoque de ".concat(target.name, " ajustado!"));
            } else {
              setToast(result.error || 'Erro ao ajustar estoque');
            }
            setAdjustModal(null);
            setAdjustQty('');
            setAdjustDir('+');
            setAdjustNote('');
          case 3:
            return _context21.a(2);
        }
      }, _callee21);
    }));
    function doAdjust() {
      return _doAdjust.apply(this, arguments);
    }
    return doAdjust;
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "p-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setInvTab('items');
    },
    className: "px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ".concat(invTab === 'items' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700')
  }, "Itens de Estoque"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setInvTab('products');
    },
    className: "px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ".concat(invTab === 'products' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700')
  }, "Cat\xE1logo de Produtos")), invTab === 'items' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "Buscar...",
    className: "pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: belowMin,
    onChange: function onChange(e) {
      return setBelowMin(e.target.checked);
    },
    className: "rounded"
  }), "Apenas abaixo do m\xEDnimo"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(true);
    },
    className: "ml-auto flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), " Novo Item")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("tr", null, ['SKU', 'Nome', 'Categ.', 'Qtd / Mín', 'Custo Unit.', 'Valor Total', 'Localização', 'Status', ''].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      className: "px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, h);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100"
  }, items.map(function (i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i.id,
      className: "hover:bg-gray-50 cursor-pointer ".concat(i.belowMin ? 'bg-red-50' : ''),
      onClick: function onClick() {
        return setSelected(i);
      }
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-mono text-xs text-gray-600"
    }, i.sku), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-medium text-gray-800"
    }, i.name), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500"
    }, i.cat), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold ".concat(i.belowMin ? 'text-red-600' : 'text-gray-800')
    }, i.qty), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-400"
    }, "/ ", i.min)), /*#__PURE__*/React.createElement("div", {
      className: "w-16 bg-gray-100 rounded-full h-1 mt-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-1 rounded-full ".concat(i.belowMin ? 'bg-red-500' : 'bg-green-500'),
      style: {
        width: "".concat(Math.min(100, i.qty / i.min * 100), "%")
      }
    }))), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-700"
    }, fmt(i.cost)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-medium text-gray-800"
    }, fmt(i.cost * i.qty)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500 max-w-xs truncate"
    }, i.loc), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, i.belowMin ? /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-red-100 text-red-700 font-medium"
    }, "\u26A0 Cr\xEDtico") : /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-700 font-medium"
    }, "Normal")), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("button", {
      className: "text-xs text-blue-600 hover:underline font-medium"
    }, "Ajustar")));
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: !!selected,
    onClose: function onClose() {
      return setSelected(null);
    },
    title: (selected === null || selected === void 0 ? void 0 : selected.name) || '',
    size: "md"
  }, selected && /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement(LabelField, {
    label: "SKU",
    value: selected.sku
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Categoria",
    value: selected.cat
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Custo Unit.",
    value: fmt(selected.cost)
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Localiza\xE7\xE3o",
    value: selected.loc
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mb-0.5"
  }, "Quantidade Atual"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold ".concat(selected.belowMin ? 'text-red-600' : 'text-gray-800')
  }, (_inventory$find$qty2 = (_inventory$find2 = inventory.find(function (i) {
    return i.id === selected.id;
  })) === null || _inventory$find2 === void 0 ? void 0 : _inventory$find2.qty) !== null && _inventory$find$qty2 !== void 0 ? _inventory$find$qty2 : selected.qty), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "M\xEDnimo: ", selected.min)), /*#__PURE__*/React.createElement(LabelField, {
    label: "Valor Total",
    value: fmt(selected.cost * ((_inventory$find$qty3 = (_inventory$find3 = inventory.find(function (i) {
      return i.id === selected.id;
    })) === null || _inventory$find3 === void 0 ? void 0 : _inventory$find3.qty) !== null && _inventory$find$qty3 !== void 0 ? _inventory$find$qty3 : selected.qty))
  })), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-gray-100 pt-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-700 mb-3"
  }, "Ajustar Estoque"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 mb-3"
  }, [['+', 'Entrada / Compra'], ['-', 'Saída / Uso']].map(function (_ref65) {
    var _ref66 = _slicedToArray(_ref65, 2),
      d = _ref66[0],
      l = _ref66[1];
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: function onClick() {
        return setAdjustDir(d);
      },
      className: "flex-1 py-2 rounded-lg text-sm font-medium border ".concat(adjustDir === d ? d === '+' ? 'bg-green-600 text-white border-green-600' : 'bg-red-600 text-white border-red-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50')
    }, d, " ", l);
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs text-gray-500 mb-1"
  }, "Quantidade"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: adjustQty,
    onChange: function onChange(e) {
      return setAdjustQty(e.target.value);
    },
    placeholder: "0",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs text-gray-500 mb-1"
  }, "Observa\xE7\xE3o"), /*#__PURE__*/React.createElement("input", {
    value: adjustNote,
    onChange: function onChange(e) {
      return setAdjustNote(e.target.value);
    },
    placeholder: "Motivo...",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      doAdjust();
      setSelected(null);
    },
    className: "mt-3 w-full py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Confirmar Ajuste")))), /*#__PURE__*/React.createElement(Modal, {
    open: newModal,
    onClose: function onClose() {
      return setNewModal(false);
    },
    title: "Novo Item de Estoque",
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, [{
    label: 'SKU *',
    key: 'sku',
    placeholder: 'Ex: NOB-5KVA'
  }, {
    label: 'Nome *',
    key: 'name',
    placeholder: 'Ex: Nobreak 5KVA'
  }, {
    label: 'Localização',
    key: 'loc',
    placeholder: 'Ex: Almox. A — Prat. 1'
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.key
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.label), /*#__PURE__*/React.createElement("input", {
      value: form[f.key],
      onChange: function onChange(e) {
        return setForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
        });
      },
      placeholder: f.placeholder,
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }));
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Categoria"), /*#__PURE__*/React.createElement("select", {
    value: form.cat,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          cat: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, ['Equipamentos', 'Conectores', 'Cabos', 'Elétrico', 'Outros'].map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3"
  }, [{
    label: 'Qtd Inicial',
    key: 'qty',
    placeholder: '0'
  }, {
    label: 'Qtd Mínima',
    key: 'min',
    placeholder: '0'
  }, {
    label: 'Custo (R$)',
    key: 'cost',
    placeholder: '0,00'
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.key
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.label), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: form[f.key],
      onChange: function onChange(e) {
        return setForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
        });
      },
      placeholder: f.placeholder,
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(false);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: createItem,
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Cadastrar Item")))), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast,
    onClose: function onClose() {
      return setToast(null);
    }
  })), invTab === 'products' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500"
  }, products.length, " produto(s) cadastrado(s)"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewProdModal(true);
    },
    className: "flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), " Novo Produto")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("tr", null, ['Código', 'Nome', 'Categoria', 'Unid.', 'Custo Ref.', 'Descrição', ''].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      className: "px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, h);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100"
  }, products.map(function (p) {
    return /*#__PURE__*/React.createElement("tr", {
      key: p.id,
      className: "hover:bg-gray-50"
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-mono text-xs text-gray-600"
    }, p.code), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-medium text-gray-800"
    }, p.name), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500"
    }, p.cat), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500"
    }, p.unit), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-700"
    }, fmt(p.costRef)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-400 max-w-xs truncate"
    }, p.desc), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
        var r;
        return _regenerator().w(function (_context22) {
          while (1) switch (_context22.n) {
            case 0:
              _context22.n = 1;
              return api.deleteProduct(p.id);
            case 1:
              r = _context22.v;
              if (r.success) {
                setProducts(function (prev) {
                  return prev.filter(function (x) {
                    return x.id !== p.id;
                  });
                });
                setInventory(function (prev) {
                  return prev.filter(function (x) {
                    return x.id !== p.id;
                  });
                });
              }
            case 2:
              return _context22.a(2);
          }
        }, _callee22);
      })),
      className: "text-xs text-red-400 hover:text-red-600"
    }, "Remover")));
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: newProdModal,
    onClose: function onClose() {
      return setNewProdModal(false);
    },
    title: "Novo Produto",
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, [{
    l: 'Código *',
    k: 'code',
    ph: 'PROD-007'
  }, {
    l: 'Nome *',
    k: 'name',
    ph: 'Nome do produto'
  }, {
    l: 'Custo de Referência (R$)',
    k: 'costRef',
    ph: '0.00',
    type: 'number'
  }, {
    l: 'Descrição',
    k: 'desc',
    ph: 'Descrição técnica do produto'
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.k
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.l), /*#__PURE__*/React.createElement("input", {
      type: f.type || 'text',
      value: prodForm[f.k],
      onChange: function onChange(e) {
        return setProdForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.k, e.target.value));
        });
      },
      placeholder: f.ph,
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Categoria"), /*#__PURE__*/React.createElement("select", {
    value: prodForm.cat,
    onChange: function onChange(e) {
      return setProdForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          cat: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, ['Baterias', 'Equipamentos', 'Cabos', 'Conectores', 'Elétrico', 'Outros'].map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Unidade"), /*#__PURE__*/React.createElement("select", {
    value: prodForm.unit,
    onChange: function onChange(e) {
      return setProdForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          unit: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, ['un', 'cx', 'kg', 'm', 'lt', 'par'].map(function (u) {
    return /*#__PURE__*/React.createElement("option", {
      key: u
    }, u);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewProdModal(false);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23() {
      var r, n;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.n) {
          case 0:
            if (!(!prodForm.code.trim() || !prodForm.name.trim())) {
              _context23.n = 1;
              break;
            }
            return _context23.a(2);
          case 1:
            _context23.n = 2;
            return api.createProduct({
              sku: prodForm.code,
              name: prodForm.name,
              category: prodForm.cat,
              unit_cost: parseFloat(prodForm.costRef || 0),
              description: prodForm.desc
            });
          case 2:
            r = _context23.v;
            if (r.success) {
              n = normalizeProduct(r.data);
              setProducts(function (p) {
                return [].concat(_toConsumableArray(p), [n]);
              });
              setInventory(function (p) {
                return [].concat(_toConsumableArray(p), [n]);
              });
              setNewProdModal(false);
              setProdForm({
                code: '',
                name: '',
                cat: 'Equipamentos',
                unit: 'un',
                costRef: '',
                desc: ''
              });
              setToast('Produto cadastrado!');
            } else setToast(r.error || 'Erro ao cadastrar produto');
          case 3:
            return _context23.a(2);
        }
      }, _callee23);
    })),
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Cadastrar"))))));
};

// ─── TECHNICIANS ──────────────────────────────────────────────────────────────

var TechniciansPage = function TechniciansPage() {
  var _useState201 = useState([]),
    _useState202 = _slicedToArray(_useState201, 2),
    technicians = _useState202[0],
    setTechnicians = _useState202[1];
  var _useState203 = useState(null),
    _useState204 = _slicedToArray(_useState203, 2),
    selected = _useState204[0],
    setSelected = _useState204[1];
  var _useState205 = useState(false),
    _useState206 = _slicedToArray(_useState205, 2),
    newModal = _useState206[0],
    setNewModal = _useState206[1];
  var _useState207 = useState(null),
    _useState208 = _slicedToArray(_useState207, 2),
    toast = _useState208[0],
    setToast = _useState208[1];
  var _useState209 = useState({
      name: '',
      phone: '',
      email: '',
      specs: '',
      status: 'ACTIVE'
    }),
    _useState210 = _slicedToArray(_useState209, 2),
    form = _useState210[0],
    setForm = _useState210[1];
  useEffect(function () {
    loadTechnicians();
  }, []);
  var loadTechnicians = /*#__PURE__*/function () {
    var _loadTechnicians = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
      var _r$data5;
      var r;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.n) {
          case 0:
            _context24.n = 1;
            return api.getTechnicians();
          case 1:
            r = _context24.v;
            if (r.success) setTechnicians(((_r$data5 = r.data) === null || _r$data5 === void 0 ? void 0 : _r$data5.data) || r.data || []);else setTechnicians([]);
          case 2:
            return _context24.a(2);
        }
      }, _callee24);
    }));
    function loadTechnicians() {
      return _loadTechnicians.apply(this, arguments);
    }
    return loadTechnicians;
  }();
  var create = /*#__PURE__*/function () {
    var _create3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25() {
      var result;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.n) {
          case 0:
            if (!(!form.name || !form.phone)) {
              _context25.n = 1;
              break;
            }
            setToast('Nome e telefone são obrigatórios');
            return _context25.a(2);
          case 1:
            _context25.n = 2;
            return api.createTechnician({
              name: form.name,
              phone: form.phone,
              email: form.email || null,
              specializations: form.specs ? form.specs.split(',').map(function (s) {
                return s.trim();
              }).filter(Boolean) : [],
              status: form.status
            });
          case 2:
            result = _context25.v;
            if (result.success) {
              setTechnicians(function (p) {
                return [result.data].concat(_toConsumableArray(p));
              });
              setNewModal(false);
              setForm({
                name: '',
                phone: '',
                email: '',
                specs: '',
                status: 'ACTIVE'
              });
              setToast("T\xE9cnico ".concat(form.name, " cadastrado!"));
            } else {
              setToast("Erro: ".concat(result.error));
            }
          case 3:
            return _context25.a(2);
        }
      }, _callee25);
    }));
    function create() {
      return _create3.apply(this, arguments);
    }
    return create;
  }();
  var toggleStatus = /*#__PURE__*/function () {
    var _toggleStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(id) {
      var t, newStatus, result;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.n) {
          case 0:
            t = technicians.find(function (x) {
              return x.id === id;
            });
            newStatus = (t === null || t === void 0 ? void 0 : t.status) === 'ACTIVE' ? 'ON_LEAVE' : 'ACTIVE';
            _context26.n = 1;
            return api.updateTechnician(id, {
              status: newStatus
            });
          case 1:
            result = _context26.v;
            if (result.success) {
              setTechnicians(function (p) {
                return p.map(function (x) {
                  return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
                    status: newStatus
                  }) : x;
                });
              });
              setSelected(null);
              setToast('Status do técnico atualizado!');
            } else {
              setToast("Erro: ".concat(result.error));
            }
          case 2:
            return _context26.a(2);
        }
      }, _callee26);
    }));
    function toggleStatus(_x11) {
      return _toggleStatus.apply(this, arguments);
    }
    return toggleStatus;
  }();
  var deleteTech = /*#__PURE__*/function () {
    var _deleteTech = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27(id) {
      var result;
      return _regenerator().w(function (_context27) {
        while (1) switch (_context27.n) {
          case 0:
            if (window.confirm('Excluir este técnico permanentemente?')) {
              _context27.n = 1;
              break;
            }
            return _context27.a(2);
          case 1:
            _context27.n = 2;
            return api.deleteTechnician(id);
          case 2:
            result = _context27.v;
            if (result.success) {
              setTechnicians(function (p) {
                return p.filter(function (x) {
                  return x.id !== id;
                });
              });
              setSelected(null);
              setToast('Técnico excluído.');
            } else {
              setToast("Erro: ".concat(result.error));
            }
          case 3:
            return _context27.a(2);
        }
      }, _callee27);
    }));
    function deleteTech(_x12) {
      return _deleteTech.apply(this, arguments);
    }
    return deleteTech;
  }();
  var sel = selected ? technicians.find(function (t) {
    return t.id === selected.id;
  }) || selected : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "p-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
  }, technicians.filter(function (t) {
    return t.status === 'ACTIVE';
  }).length, " ativos"), /*#__PURE__*/React.createElement("span", {
    className: "bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium"
  }, technicians.filter(function (t) {
    return t.status !== 'ACTIVE';
  }).length, " afastados")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(true);
    },
    className: "flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), " Novo T\xE9cnico")), technicians.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "technicians",
    className: "w-7 h-7 text-blue-400"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 font-medium mb-1"
  }, "Nenhum t\xE9cnico cadastrado"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 mb-5"
  }, "Clique em \"Novo T\xE9cnico\" para adicionar o primeiro."), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(true);
    },
    className: "inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), " Novo T\xE9cnico")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, technicians.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: function onClick() {
        return setSelected(t);
      },
      className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5 cursor-pointer hover:shadow-md transition-shadow ".concat(t.status !== 'ACTIVE' ? 'opacity-70' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
    }, (t.name || '?')[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-semibold text-gray-800"
    }, t.name), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500"
    }, t.phone), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-1 mt-1"
    }, (t.specializations || t.specs || []).map(function (s) {
      return /*#__PURE__*/React.createElement("span", {
        key: s,
        className: "px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded border border-blue-100"
      }, s);
    })))), /*#__PURE__*/React.createElement(Badge, {
      status: t.status
    })), t.status === 'ACTIVE' && /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-bold text-gray-800"
    }, t.orders || 0), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "OS / m\xEAs")), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-bold text-gray-800"
    }, t.avg_time || t.avgMin || '—', /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-normal text-gray-400"
    }, "min")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Tempo m\xE9dio")), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-bold ".concat((t.rework_percentage || t.rework || 0) > 5 ? 'text-red-600' : 'text-green-600')
    }, t.rework_percentage || t.rework || 0, "%"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Retrabalho"))));
  })), /*#__PURE__*/React.createElement(Modal, {
    open: !!sel,
    onClose: function onClose() {
      return setSelected(null);
    },
    title: (sel === null || sel === void 0 ? void 0 : sel.name) || '',
    size: "md"
  }, sel && /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl"
  }, (sel.name || '?')[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-gray-800 text-lg"
  }, sel.name), /*#__PURE__*/React.createElement(Badge, {
    status: sel.status
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    className: "w-4 h-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:".concat(sel.phone),
    className: "text-sm text-blue-600"
  }, sel.phone)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    className: "w-4 h-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:".concat(sel.email),
    className: "text-sm text-blue-600"
  }, sel.email || '—'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mb-2"
  }, "Especializa\xE7\xF5es"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, (sel.specializations || sel.specs || []).map(function (s) {
    return /*#__PURE__*/React.createElement("span", {
      key: s,
      className: "px-2.5 py-1 bg-blue-50 text-blue-600 text-sm rounded-lg border border-blue-100"
    }, s);
  }))), sel.status === 'ACTIVE' && /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 rounded-xl p-4 grid grid-cols-3 gap-4 text-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold text-gray-800"
  }, sel.orders || 0), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "OS este m\xEAs")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold text-gray-800"
  }, sel.avg_time || sel.avgMin || '—', /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-normal text-gray-400"
  }, "min")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Tempo m\xE9dio")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold ".concat((sel.rework_percentage || sel.rework || 0) > 5 ? 'text-red-600' : 'text-green-600')
  }, sel.rework_percentage || sel.rework || 0, "%"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Retrabalho"))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2 border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toggleStatus(sel.id);
    },
    className: "flex-1 py-2.5 border rounded-lg text-sm font-medium ".concat(sel.status === 'ACTIVE' ? 'border-amber-300 text-amber-700 hover:bg-amber-50' : 'border-green-300 text-green-700 hover:bg-green-50')
  }, sel.status === 'ACTIVE' ? 'Registrar Afastamento' : 'Retornar ao Trabalho'), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return deleteTech(sel.id);
    },
    className: "px-4 py-2.5 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50"
  }, "Excluir"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelected(null);
    },
    className: "px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Fechar")))), /*#__PURE__*/React.createElement(Modal, {
    open: newModal,
    onClose: function onClose() {
      return setNewModal(false);
    },
    title: "Novo T\xE9cnico",
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, [{
    label: 'Nome Completo *',
    key: 'name',
    placeholder: 'Ex: André Ferreira'
  }, {
    label: 'Telefone *',
    key: 'phone',
    placeholder: '(17) 99999-0000'
  }, {
    label: 'E-mail',
    key: 'email',
    placeholder: 'andre@opticom.com.br'
  }, {
    label: 'Especializações',
    key: 'specs',
    placeholder: 'Ex: Instalação, Emergência (separar por vírgula)'
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.key
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.label), /*#__PURE__*/React.createElement("input", {
      value: form[f.key],
      onChange: function onChange(e) {
        return setForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
        });
      },
      placeholder: f.placeholder,
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(false);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: create,
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Cadastrar T\xE9cnico")))), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast,
    onClose: function onClose() {
      return setToast(null);
    }
  }));
};

// ─── FLEET ────────────────────────────────────────────────────────────────────

var FleetPage = function FleetPage() {
  var _useState211 = useState([]),
    _useState212 = _slicedToArray(_useState211, 2),
    vehicles = _useState212[0],
    setVehicles = _useState212[1];
  var _useState213 = useState([]),
    _useState214 = _slicedToArray(_useState213, 2),
    technicians = _useState214[0],
    setTechs = _useState214[1];
  var _useState215 = useState([]),
    _useState216 = _slicedToArray(_useState215, 2),
    maintenance = _useState216[0],
    setMaint = _useState216[1];
  var _useState217 = useState(null),
    _useState218 = _slicedToArray(_useState217, 2),
    selected = _useState218[0],
    setSelected = _useState218[1];
  var _useState219 = useState(false),
    _useState220 = _slicedToArray(_useState219, 2),
    newModal = _useState220[0],
    setNewModal = _useState220[1];
  var _useState221 = useState(null),
    _useState222 = _slicedToArray(_useState221, 2),
    toast = _useState222[0],
    setToast = _useState222[1];
  var _useState223 = useState({
      plate: '',
      model: '',
      year: '',
      assigned_technician_id: ''
    }),
    _useState224 = _slicedToArray(_useState223, 2),
    form = _useState224[0],
    setForm = _useState224[1];
  var _useState225 = useState(''),
    _useState226 = _slicedToArray(_useState225, 2),
    odoEdit = _useState226[0],
    setOdoEdit = _useState226[1];
  var _useState227 = useState({
      date: '',
      type: 'Preventiva',
      desc: '',
      km: '',
      cost: '',
      tech: ''
    }),
    _useState228 = _slicedToArray(_useState227, 2),
    maintForm = _useState228[0],
    setMaintForm = _useState228[1];
  useEffect(function () {
    api.getVehicles().then(function (r) {
      var _r$data6;
      return setVehicles(((_r$data6 = r.data) === null || _r$data6 === void 0 ? void 0 : _r$data6.data) || r.data || []);
    });
    api.getTechnicians().then(function (r) {
      var _r$data7;
      return setTechs(((_r$data7 = r.data) === null || _r$data7 === void 0 ? void 0 : _r$data7.data) || r.data || []);
    });
  }, []);
  useEffect(function () {
    if (selected !== null && selected !== void 0 && selected.id) {
      api.getVehicleMaintenance(selected.id).then(function (r) {
        if (r.success) setMaint(r.data || []);
      });
    } else {
      setMaint([]);
    }
  }, [selected === null || selected === void 0 ? void 0 : selected.id]);
  var create = /*#__PURE__*/function () {
    var _create4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28() {
      var result;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.n) {
          case 0:
            if (!(!form.plate || !form.model)) {
              _context28.n = 1;
              break;
            }
            setToast('Placa e modelo são obrigatórios');
            return _context28.a(2);
          case 1:
            _context28.n = 2;
            return api.createVehicle({
              plate: form.plate.toUpperCase(),
              model: form.model,
              year: parseInt(form.year) || new Date().getFullYear(),
              assigned_technician_id: form.assigned_technician_id || null,
              status: 'AVAILABLE'
            });
          case 2:
            result = _context28.v;
            if (result.success) {
              setVehicles(function (p) {
                return [result.data].concat(_toConsumableArray(p));
              });
              setNewModal(false);
              setForm({
                plate: '',
                model: '',
                year: '',
                assigned_technician_id: ''
              });
              setToast("Ve\xEDculo ".concat(result.data.plate, " cadastrado!"));
            } else {
              setToast("Erro: ".concat(result.error));
            }
          case 3:
            return _context28.a(2);
        }
      }, _callee28);
    }));
    function create() {
      return _create4.apply(this, arguments);
    }
    return create;
  }();
  var updateOdo = /*#__PURE__*/function () {
    var _updateOdo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(id) {
      var km, result;
      return _regenerator().w(function (_context29) {
        while (1) switch (_context29.n) {
          case 0:
            km = parseInt(odoEdit) || 0;
            _context29.n = 1;
            return api.updateVehicle(id, {
              odometer: km
            });
          case 1:
            result = _context29.v;
            if (result.success) {
              setVehicles(function (p) {
                return p.map(function (v) {
                  return v.id === id ? _objectSpread(_objectSpread({}, v), {}, {
                    odometer: km
                  }) : v;
                });
              });
              setSelected(function (prev) {
                return prev ? _objectSpread(_objectSpread({}, prev), {}, {
                  odometer: km
                }) : null;
              });
              setOdoEdit('');
              setToast('Odômetro atualizado!');
            } else {
              setToast("Erro: ".concat(result.error));
            }
          case 2:
            return _context29.a(2);
        }
      }, _callee29);
    }));
    function updateOdo(_x13) {
      return _updateOdo.apply(this, arguments);
    }
    return updateOdo;
  }();
  var changeStatus = /*#__PURE__*/function () {
    var _changeStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30(id, status) {
      var result;
      return _regenerator().w(function (_context30) {
        while (1) switch (_context30.n) {
          case 0:
            _context30.n = 1;
            return api.updateVehicle(id, {
              status: status
            });
          case 1:
            result = _context30.v;
            if (result.success) {
              setVehicles(function (p) {
                return p.map(function (v) {
                  return v.id === id ? _objectSpread(_objectSpread({}, v), {}, {
                    status: status
                  }) : v;
                });
              });
              setSelected(function (prev) {
                return prev ? _objectSpread(_objectSpread({}, prev), {}, {
                  status: status
                }) : null;
              });
              setToast('Status do veículo atualizado!');
            } else {
              setToast("Erro: ".concat(result.error));
            }
          case 2:
            return _context30.a(2);
        }
      }, _callee30);
    }));
    function changeStatus(_x14, _x15) {
      return _changeStatus.apply(this, arguments);
    }
    return changeStatus;
  }();
  var sel = selected ? vehicles.find(function (v) {
    return v.id === selected.id;
  }) || selected : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "p-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 xl:grid-cols-4 gap-4"
  }, /*#__PURE__*/React.createElement(KPI, {
    title: "Frota Total",
    value: "".concat(vehicles.length, " ve\xEDculos"),
    sub: "".concat(vehicles.filter(function (v) {
      return v.status === 'IN_USE';
    }).length, " em campo"),
    icon: "fleet",
    color: "blue"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "Dispon\xEDveis",
    value: vehicles.filter(function (v) {
      return v.status === 'AVAILABLE';
    }).length,
    sub: "prontos para uso",
    icon: "fleet",
    color: "green"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "Em Manuten\xE7\xE3o",
    value: vehicles.filter(function (v) {
      return v.status === 'MAINTENANCE';
    }).length,
    sub: "fora de opera\xE7\xE3o",
    icon: "audit",
    color: "orange"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "Dispon\xEDvel",
    value: "".concat(vehicles.reduce(function (s, v) {
      return s + v.odometer;
    }, 0).toLocaleString('pt-BR'), " km"),
    sub: "od\xF4metro acumulado",
    icon: "fleet",
    color: "purple"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold text-gray-700"
  }, "Frota Cadastrada"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(true);
    },
    className: "flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), " Novo Ve\xEDculo")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("tr", null, ['Placa', 'Modelo', 'Ano', 'Responsável', 'Status', 'Odômetro', 'Próx. Revisão', ''].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      className: "px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, h);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100"
  }, vehicles.map(function (v) {
    var _v$technicians;
    return /*#__PURE__*/React.createElement("tr", {
      key: v.id,
      className: "hover:bg-gray-50 cursor-pointer",
      onClick: function onClick() {
        setSelected(v);
        setOdoEdit(String(v.odometer));
      }
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 font-mono font-bold text-gray-700"
    }, v.plate), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-800"
    }, v.model), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-600"
    }, v.year), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-600"
    }, ((_v$technicians = v.technicians) === null || _v$technicians === void 0 ? void 0 : _v$technicians.name) || /*#__PURE__*/React.createElement("span", {
      className: "text-gray-300"
    }, "\u2014")), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement(Badge, {
      status: v.status
    })), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-700"
    }, (v.odometer || 0).toLocaleString('pt-BR'), " km"), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500"
    }, fmtDate(v.next_service_date || v.nextService)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("button", {
      className: "text-xs text-blue-600 hover:underline font-medium"
    }, "Detalhes \u2192")));
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: !!sel,
    onClose: function onClose() {
      return setSelected(null);
    },
    title: "".concat((sel === null || sel === void 0 ? void 0 : sel.plate) || '', " \u2014 ").concat((sel === null || sel === void 0 ? void 0 : sel.model) || ''),
    size: "md"
  }, sel && /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Badge, {
    status: sel.status
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-gray-500"
  }, sel.year)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement(LabelField, {
    label: "Modelo",
    value: sel.model
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Ano",
    value: sel.year
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Respons\xE1vel",
    value: sel.tech || 'Não atribuído'
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "\xDAltima Revis\xE3o",
    value: fmtDate(sel.lastService)
  }), /*#__PURE__*/React.createElement(LabelField, {
    label: "Pr\xF3x. Revis\xE3o",
    value: fmtDate(sel.nextService)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mb-1"
  }, "Od\xF4metro (km)"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: odoEdit,
    onChange: function onChange(e) {
      return setOdoEdit(e.target.value);
    },
    className: "flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return updateOdo(sel.id);
    },
    className: "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
  }, "Salvar"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mb-2"
  }, "Alterar Status"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, ['AVAILABLE', 'IN_USE', 'MAINTENANCE'].map(function (s) {
    var _STATUS_MAP$s;
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: function onClick() {
        return changeStatus(sel.id, s);
      },
      className: "flex-1 py-2 text-xs rounded-lg border transition-colors ".concat(sel.status === s ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50')
    }, ((_STATUS_MAP$s = STATUS_MAP[s]) === null || _STATUS_MAP$s === void 0 ? void 0 : _STATUS_MAP$s[1]) || s);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-gray-100 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-700"
  }, "Hist\xF3rico de Manuten\xE7\xE3o"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, maintenance.length, " registro(s)")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 max-h-40 overflow-y-auto mb-3"
  }, maintenance.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 text-center py-2"
  }, "Nenhum registro ainda") : maintenance.map(function (m) {
    var _m$km;
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      className: "bg-gray-50 rounded-lg p-2.5 text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-0.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold px-1.5 py-0.5 rounded ".concat(m.type === 'Preventiva' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700')
    }, m.type), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, fmtDate(m.date), " \xB7 ", (_m$km = m.km) === null || _m$km === void 0 ? void 0 : _m$km.toLocaleString('pt-BR'), " km")), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-700 mt-0.5"
    }, m.description || m.desc), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between mt-0.5 text-gray-400"
    }, /*#__PURE__*/React.createElement("span", null, "T\xE9cnico: ", m.technician_name || m.tech || '—'), /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-gray-600"
    }, fmt(m.cost))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-xl p-3 space-y-2 bg-gray-50"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-gray-600"
  }, "Registrar Manuten\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-gray-400"
  }, "Data"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: maintForm.date,
    onChange: function onChange(e) {
      return setMaintForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          date: e.target.value
        });
      });
    },
    className: "w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-gray-400"
  }, "Tipo"), /*#__PURE__*/React.createElement("select", {
    value: maintForm.type,
    onChange: function onChange(e) {
      return setMaintForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          type: e.target.value
        });
      });
    },
    className: "w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none bg-white"
  }, /*#__PURE__*/React.createElement("option", null, "Preventiva"), /*#__PURE__*/React.createElement("option", null, "Corretiva"), /*#__PURE__*/React.createElement("option", null, "Revis\xE3o"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-gray-400"
  }, "KM atual"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: maintForm.km,
    onChange: function onChange(e) {
      return setMaintForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          km: e.target.value
        });
      });
    },
    className: "w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none bg-white",
    placeholder: "87500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-gray-400"
  }, "Custo (R$)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: maintForm.cost,
    onChange: function onChange(e) {
      return setMaintForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          cost: e.target.value
        });
      });
    },
    className: "w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none bg-white",
    placeholder: "350.00"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-gray-400"
  }, "Descri\xE7\xE3o"), /*#__PURE__*/React.createElement("input", {
    value: maintForm.desc,
    onChange: function onChange(e) {
      return setMaintForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          desc: e.target.value
        });
      });
    },
    className: "w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none bg-white",
    placeholder: "Troca de \xF3leo e filtros..."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs text-gray-400"
  }, "T\xE9cnico"), /*#__PURE__*/React.createElement("select", {
    value: maintForm.tech,
    onChange: function onChange(e) {
      return setMaintForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          tech: e.target.value
        });
      });
    },
    className: "w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none bg-white"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecionar..."), technicians.map(function (t) {
    return /*#__PURE__*/React.createElement("option", {
      key: t.id,
      value: t.name
    }, t.name);
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31() {
      var result;
      return _regenerator().w(function (_context31) {
        while (1) switch (_context31.n) {
          case 0:
            if (!(!maintForm.date || !maintForm.desc)) {
              _context31.n = 1;
              break;
            }
            setToast('Data e descrição são obrigatórios');
            return _context31.a(2);
          case 1:
            _context31.n = 2;
            return api.createVehicleMaintenance(sel.id, {
              date: maintForm.date,
              type: maintForm.type,
              description: maintForm.desc,
              km: parseInt(maintForm.km) || sel.odometer || null,
              cost: Math.round(parseFloat(maintForm.cost || 0) * 100),
              technician_name: maintForm.tech || null
            });
          case 2:
            result = _context31.v;
            if (result.success) {
              setMaint(function (prev) {
                return [result.data].concat(_toConsumableArray(prev));
              });
              setMaintForm({
                date: '',
                type: 'Preventiva',
                desc: '',
                km: '',
                cost: '',
                tech: ''
              });
              setToast('Manutenção registrada!');
            } else {
              setToast("Erro: ".concat(result.error));
            }
          case 3:
            return _context31.a(2);
        }
      }, _callee31);
    })),
    className: "w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700"
  }, "Registrar"))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2 border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelected(null);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Fechar")))), /*#__PURE__*/React.createElement(Modal, {
    open: newModal,
    onClose: function onClose() {
      return setNewModal(false);
    },
    title: "Novo Ve\xEDculo",
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, [{
    label: 'Placa *',
    key: 'plate',
    placeholder: 'Ex: MNO-5H01'
  }, {
    label: 'Modelo *',
    key: 'model',
    placeholder: 'Ex: Fiat Fiorino'
  }, {
    label: 'Ano',
    key: 'year',
    placeholder: '2026',
    type: 'number'
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.key
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.label), /*#__PURE__*/React.createElement("input", {
      type: f.type || 'text',
      value: form[f.key],
      onChange: function onChange(e) {
        return setForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
        });
      },
      placeholder: f.placeholder,
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }));
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Respons\xE1vel"), /*#__PURE__*/React.createElement("select", {
    value: form.assigned_technician_id,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          assigned_technician_id: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Nenhum"), technicians.map(function (t) {
    return /*#__PURE__*/React.createElement("option", {
      key: t.id,
      value: t.id
    }, t.name);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNewModal(false);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: create,
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Cadastrar Ve\xEDculo")))), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast,
    onClose: function onClose() {
      return setToast(null);
    }
  }));
};

// ─── SETTINGS ─────────────────────────────────────────────────────────────────

var SettingsPage = function SettingsPage(_ref70) {
  var taxRegime = _ref70.taxRegime,
    setTaxRegime = _ref70.setTaxRegime,
    _ref70$incomeCats = _ref70.incomeCats,
    incomeCats = _ref70$incomeCats === void 0 ? [] : _ref70$incomeCats,
    setIncomeCats = _ref70.setIncomeCats,
    _ref70$expenseCats = _ref70.expenseCats,
    expenseCats = _ref70$expenseCats === void 0 ? [] : _ref70$expenseCats,
    setExpenseCats = _ref70.setExpenseCats,
    _ref70$bankAccounts = _ref70.bankAccounts,
    bankAccounts = _ref70$bankAccounts === void 0 ? [] : _ref70$bankAccounts,
    setBankAccounts = _ref70.setBankAccounts,
    _ref70$payMethods = _ref70.payMethods,
    payMethods = _ref70$payMethods === void 0 ? [] : _ref70$payMethods,
    setPayMethods = _ref70.setPayMethods,
    _ref70$permissions = _ref70.permissions,
    permissions = _ref70$permissions === void 0 ? DEFAULT_PERMISSIONS : _ref70$permissions,
    savePermissions = _ref70.savePermissions;
  var _useState229 = useState('company'),
    _useState230 = _slicedToArray(_useState229, 2),
    tab = _useState230[0],
    setTab = _useState230[1];
  var _useState231 = useState({
      name: 'Opticom Telecom',
      cnpj: '04.176.164/0001-25',
      email: 'contato@opticom.com.br',
      phone: '(17) 3212-5000',
      address: 'Rua das Telecomunicações, 100',
      city: 'São José do Rio Preto — SP',
      cep: '15000-000',
      plan: 'PROFESSIONAL'
    }),
    _useState232 = _slicedToArray(_useState231, 2),
    company = _useState232[0],
    setCompany = _useState232[1];
  var _useState233 = useState([]),
    _useState234 = _slicedToArray(_useState233, 2),
    users = _useState234[0],
    setUsers = _useState234[1];
  var _useState235 = useState({
      email: true,
      sms: false,
      lowStock: true,
      osOverdue: true,
      contractExpiring: true,
      payments: true
    }),
    _useState236 = _slicedToArray(_useState235, 2),
    notif = _useState236[0],
    setNotif = _useState236[1];
  var _useState237 = useState({
      urgent: 2,
      high: 8,
      medium: 24,
      low: 72
    }),
    _useState238 = _slicedToArray(_useState237, 2),
    sla = _useState238[0],
    setSla = _useState238[1];
  var _useState239 = useState(null),
    _useState240 = _slicedToArray(_useState239, 2),
    toast = _useState240[0],
    setToast = _useState240[1];
  useEffect(function () {
    Promise.all([api.getSetting('company'), api.getSetting('sla'), api.getSetting('notifications')]).then(function (_ref71) {
      var _c$data, _s$data, _n$data;
      var _ref72 = _slicedToArray(_ref71, 3),
        c = _ref72[0],
        s = _ref72[1],
        n = _ref72[2];
      if (c.success && (_c$data = c.data) !== null && _c$data !== void 0 && _c$data.value) {
        try {
          setCompany(JSON.parse(c.data.value));
        } catch (_unused2) {}
      }
      if (s.success && (_s$data = s.data) !== null && _s$data !== void 0 && _s$data.value) {
        try {
          setSla(JSON.parse(s.data.value));
        } catch (_unused3) {}
      }
      if (n.success && (_n$data = n.data) !== null && _n$data !== void 0 && _n$data.value) {
        try {
          setNotif(JSON.parse(n.data.value));
        } catch (_unused4) {}
      }
    });
  }, []);
  var _useState241 = useState(false),
    _useState242 = _slicedToArray(_useState241, 2),
    inviteModal = _useState242[0],
    setInviteModal = _useState242[1];
  var _useState243 = useState({
      name: '',
      email: '',
      password: '',
      role: 'TECHNICIAN'
    }),
    _useState244 = _slicedToArray(_useState243, 2),
    inviteForm = _useState244[0],
    setInviteForm = _useState244[1];
  // Financial tab state — moved here from IIFE (hooks cannot be inside callbacks)
  var _useState245 = useState(''),
    _useState246 = _slicedToArray(_useState245, 2),
    newCat = _useState246[0],
    setNewCat = _useState246[1];
  var _useState247 = useState('income'),
    _useState248 = _slicedToArray(_useState247, 2),
    newCatType = _useState248[0],
    setNewCatType = _useState248[1];
  var _useState249 = useState({
      bank: '',
      agency: '',
      account: '',
      type: 'Corrente'
    }),
    _useState250 = _slicedToArray(_useState249, 2),
    newBank = _useState250[0],
    setNewBank = _useState250[1];
  var _useState251 = useState(''),
    _useState252 = _slicedToArray(_useState251, 2),
    newPay = _useState252[0],
    setNewPay = _useState252[1];
  // Contas e Saldos tab state
  var _useState253 = useState({}),
    _useState254 = _slicedToArray(_useState253, 2),
    initBalEdit = _useState254[0],
    setInitBalEdit = _useState254[1];
  var _useState255 = useState({}),
    _useState256 = _slicedToArray(_useState255, 2),
    savingBal = _useState256[0],
    setSavingBal = _useState256[1];
  var _useState257 = useState([]),
    _useState258 = _slicedToArray(_useState257, 2),
    investList = _useState258[0],
    setInvestList = _useState258[1];
  var _useState259 = useState(false),
    _useState260 = _slicedToArray(_useState259, 2),
    investLoading = _useState260[0],
    setInvestLoading = _useState260[1];
  var _useState261 = useState({
      description: '',
      amount: '',
      due_date: new Date().toISOString().split('T')[0],
      bank_account_id: ''
    }),
    _useState262 = _slicedToArray(_useState261, 2),
    newInvest = _useState262[0],
    setNewInvest = _useState262[1];
  useEffect(function () {
    api.getUsers().then(function (r) {
      if (r.success) setUsers(r.data || []);else setUsers([]);
    });
  }, []);
  useEffect(function () {
    if (tab !== 'accounts') return;
    setInvestLoading(true);
    api.getTransactions().then(function (r) {
      if (r.success) {
        var _r$data8;
        var txs = ((_r$data8 = r.data) === null || _r$data8 === void 0 ? void 0 : _r$data8.data) || r.data || [];
        var investCatIds = new Set(expenseCats.filter(function (c) {
          return c.accounting_class === 'INVESTIMENTO';
        }).map(function (c) {
          return c.id;
        }));
        setInvestList(txs.filter(function (t) {
          return t.type === 'EXPENSE' && investCatIds.has(t.category_id);
        }).slice(0, 30));
      }
      setInvestLoading(false);
    });
  }, [tab]);
  var saveInitBal = /*#__PURE__*/function () {
    var _saveInitBal = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32(id) {
      var raw, val, r;
      return _regenerator().w(function (_context32) {
        while (1) switch (_context32.n) {
          case 0:
            raw = (initBalEdit[id] !== undefined ? initBalEdit[id] : '').replace(',', '.').replace(/[^0-9.]/g, '');
            val = Math.round(parseFloat(raw || '0') * 100);
            if (!isNaN(val)) {
              _context32.n = 1;
              break;
            }
            setToast('Valor inválido');
            return _context32.a(2);
          case 1:
            setSavingBal(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, id, true));
            });
            _context32.n = 2;
            return api.updateBankAccount(id, {
              initial_balance: val
            });
          case 2:
            r = _context32.v;
            setSavingBal(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, id, false));
            });
            if (r.success) {
              setBankAccounts(function (p) {
                return p.map(function (b) {
                  return b.id === id ? _objectSpread(_objectSpread({}, b), {}, {
                    initial_balance: val
                  }) : b;
                });
              });
              setToast('Saldo inicial salvo!');
            } else {
              setToast(r.error || 'Erro ao salvar saldo');
            }
          case 3:
            return _context32.a(2);
        }
      }, _callee32);
    }));
    function saveInitBal(_x16) {
      return _saveInitBal.apply(this, arguments);
    }
    return saveInitBal;
  }();
  var addInvestment = /*#__PURE__*/function () {
    var _addInvestment = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33() {
      var investCat, amount, payload, r, _r$data9, tx;
      return _regenerator().w(function (_context33) {
        while (1) switch (_context33.n) {
          case 0:
            if (!(!newInvest.description || !newInvest.amount || !newInvest.due_date)) {
              _context33.n = 1;
              break;
            }
            setToast('Preencha descrição, valor e data');
            return _context33.a(2);
          case 1:
            investCat = expenseCats.find(function (c) {
              return c.accounting_class === 'INVESTIMENTO';
            });
            if (investCat) {
              _context33.n = 2;
              break;
            }
            setToast('Nenhuma categoria de Investimento cadastrada');
            return _context33.a(2);
          case 2:
            amount = Math.round(parseFloat(newInvest.amount.replace(',', '.')) * 100);
            if (!(isNaN(amount) || amount <= 0)) {
              _context33.n = 3;
              break;
            }
            setToast('Valor inválido');
            return _context33.a(2);
          case 3:
            payload = {
              type: 'EXPENSE',
              description: newInvest.description,
              amount: amount,
              due_date: newInvest.due_date,
              category_id: investCat.id,
              status: 'PENDING'
            };
            if (newInvest.bank_account_id) payload.bank_account_id = newInvest.bank_account_id;
            _context33.n = 4;
            return api.createTransaction(payload);
          case 4:
            r = _context33.v;
            if (r.success) {
              tx = ((_r$data9 = r.data) === null || _r$data9 === void 0 ? void 0 : _r$data9.data) || r.data;
              setInvestList(function (p) {
                return [tx].concat(_toConsumableArray(p));
              });
              setNewInvest({
                description: '',
                amount: '',
                due_date: new Date().toISOString().split('T')[0],
                bank_account_id: ''
              });
              setToast('Investimento registrado!');
            } else {
              setToast(r.error || 'Erro ao registrar');
            }
          case 5:
            return _context33.a(2);
        }
      }, _callee33);
    }));
    function addInvestment() {
      return _addInvestment.apply(this, arguments);
    }
    return addInvestment;
  }();
  var saveCompany = /*#__PURE__*/function () {
    var _saveCompany = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34() {
      return _regenerator().w(function (_context34) {
        while (1) switch (_context34.n) {
          case 0:
            _context34.n = 1;
            return api.setSetting('company', JSON.stringify(company));
          case 1:
            setToast('Configurações da empresa salvas!');
          case 2:
            return _context34.a(2);
        }
      }, _callee34);
    }));
    function saveCompany() {
      return _saveCompany.apply(this, arguments);
    }
    return saveCompany;
  }();
  var saveSla = /*#__PURE__*/function () {
    var _saveSla = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35() {
      return _regenerator().w(function (_context35) {
        while (1) switch (_context35.n) {
          case 0:
            _context35.n = 1;
            return api.setSetting('sla', JSON.stringify(sla));
          case 1:
            setToast('SLAs atualizados!');
          case 2:
            return _context35.a(2);
        }
      }, _callee35);
    }));
    function saveSla() {
      return _saveSla.apply(this, arguments);
    }
    return saveSla;
  }();
  var saveNotif = /*#__PURE__*/function () {
    var _saveNotif = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36() {
      return _regenerator().w(function (_context36) {
        while (1) switch (_context36.n) {
          case 0:
            _context36.n = 1;
            return api.setSetting('notifications', JSON.stringify(notif));
          case 1:
            setToast('Preferências de notificação salvas!');
          case 2:
            return _context36.a(2);
        }
      }, _callee36);
    }));
    function saveNotif() {
      return _saveNotif.apply(this, arguments);
    }
    return saveNotif;
  }();
  var invite = /*#__PURE__*/function () {
    var _invite = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee37() {
      var result;
      return _regenerator().w(function (_context37) {
        while (1) switch (_context37.n) {
          case 0:
            if (!(!inviteForm.name || !inviteForm.email || !inviteForm.password)) {
              _context37.n = 1;
              break;
            }
            setToast('Nome, e-mail e senha são obrigatórios');
            return _context37.a(2);
          case 1:
            _context37.n = 2;
            return api.register(inviteForm.name, inviteForm.email, inviteForm.password, inviteForm.role);
          case 2:
            result = _context37.v;
            if (result.success) {
              setUsers(function (p) {
                return [].concat(_toConsumableArray(p), [_objectSpread(_objectSpread({}, result.user), {}, {
                  status: 'ACTIVE'
                })]);
              });
              setInviteModal(false);
              setInviteForm({
                name: '',
                email: '',
                password: '',
                role: 'TECHNICIAN'
              });
              setToast("Usu\xE1rio ".concat(inviteForm.email, " criado com sucesso!"));
            } else {
              setToast(result.error || 'Erro ao criar usuário');
            }
          case 3:
            return _context37.a(2);
        }
      }, _callee37);
    }));
    function invite() {
      return _invite.apply(this, arguments);
    }
    return invite;
  }();
  var _useState263 = useState(null),
    _useState264 = _slicedToArray(_useState263, 2),
    deleteConfirm = _useState264[0],
    setDeleteConfirm = _useState264[1]; // { id, name }
  var _useState265 = useState(null),
    _useState266 = _slicedToArray(_useState265, 2),
    editUserModal = _useState266[0],
    setEditUserModal = _useState266[1]; // { id, name, email, role }

  var updateUser = /*#__PURE__*/function () {
    var _updateUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee38() {
      var _editUserModal$newPas;
      var payload, r;
      return _regenerator().w(function (_context38) {
        while (1) switch (_context38.n) {
          case 0:
            if (editUserModal) {
              _context38.n = 1;
              break;
            }
            return _context38.a(2);
          case 1:
            payload = {
              name: editUserModal.name,
              role: editUserModal.role
            };
            if ((_editUserModal$newPas = editUserModal.newPassword) !== null && _editUserModal$newPas !== void 0 && _editUserModal$newPas.trim()) payload.password = editUserModal.newPassword.trim();
            _context38.n = 2;
            return api.updateUser(editUserModal.id, payload);
          case 2:
            r = _context38.v;
            if (r.success) {
              setUsers(function (p) {
                return p.map(function (u) {
                  return u.id === editUserModal.id ? _objectSpread(_objectSpread({}, u), {}, {
                    name: editUserModal.name,
                    role: editUserModal.role
                  }) : u;
                });
              });
              setEditUserModal(null);
              setToast('Usuário atualizado!');
            } else {
              setToast(r.error || 'Erro ao atualizar usuário');
            }
          case 3:
            return _context38.a(2);
        }
      }, _callee38);
    }));
    function updateUser() {
      return _updateUser.apply(this, arguments);
    }
    return updateUser;
  }();
  var deactivateUser = /*#__PURE__*/function () {
    var _deactivateUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee39(id) {
      var result;
      return _regenerator().w(function (_context39) {
        while (1) switch (_context39.n) {
          case 0:
            _context39.n = 1;
            return api.deactivateUser(id);
          case 1:
            result = _context39.v;
            if (result.success) {
              setUsers(function (p) {
                return p.map(function (u) {
                  return u.id === id ? _objectSpread(_objectSpread({}, u), {}, {
                    status: 'INACTIVE'
                  }) : u;
                });
              });
              setToast('Usuário desativado.');
            } else setToast(result.error || 'Erro ao desativar usuário');
          case 2:
            return _context39.a(2);
        }
      }, _callee39);
    }));
    function deactivateUser(_x17) {
      return _deactivateUser.apply(this, arguments);
    }
    return deactivateUser;
  }();
  var deleteUserPermanent = /*#__PURE__*/function () {
    var _deleteUserPermanent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee40(id) {
      var result;
      return _regenerator().w(function (_context40) {
        while (1) switch (_context40.n) {
          case 0:
            _context40.n = 1;
            return api.deleteUser(id);
          case 1:
            result = _context40.v;
            if (result.success) {
              setUsers(function (p) {
                return p.filter(function (u) {
                  return u.id !== id;
                });
              });
              setDeleteConfirm(null);
              setToast('Usuário excluído permanentemente.');
            } else {
              setDeleteConfirm(null);
              setToast(result.error || 'Erro ao excluir usuário');
            }
          case 2:
            return _context40.a(2);
        }
      }, _callee40);
    }));
    function deleteUserPermanent(_x18) {
      return _deleteUserPermanent.apply(this, arguments);
    }
    return deleteUserPermanent;
  }();
  var ROLE_LABEL = {
    ADMIN: 'Administrador',
    MANAGER: 'Gerente',
    TECHNICIAN: 'Técnico'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "p-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1 border-b border-gray-200"
  }, [['company', 'Empresa'], ['tax', 'Tributação'], ['financial', 'Financeiro'], ['accounts', 'Contas e Saldos'], ['users', 'Usuários'], ['notifications', 'Notificações'], ['sla', 'SLA']].map(function (_ref73) {
    var _ref74 = _slicedToArray(_ref73, 2),
      id = _ref74[0],
      lbl = _ref74[1];
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: function onClick() {
        return setTab(id);
      },
      className: "px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ".concat(tab === id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700')
    }, lbl);
  })), tab === 'company' && /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-semibold text-gray-800"
  }, "Dados da Empresa"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Informa\xE7\xF5es gerais da organiza\xE7\xE3o")), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100"
  }, "Plano ", company.plan)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, [{
    label: 'Nome / Razão Social',
    key: 'name'
  }, {
    label: 'CNPJ',
    key: 'cnpj'
  }, {
    label: 'E-mail',
    key: 'email'
  }, {
    label: 'Telefone',
    key: 'phone'
  }, {
    label: 'Endereço',
    key: 'address'
  }, {
    label: 'Cidade / Estado',
    key: 'city'
  }, {
    label: 'CEP',
    key: 'cep'
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.key,
      className: f.key === 'address' ? 'col-span-2' : ''
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.label), /*#__PURE__*/React.createElement("input", {
      value: company[f.key],
      onChange: function onChange(e) {
        return setCompany(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
        });
      },
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end pt-2 border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: saveCompany,
    className: "px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Salvar Altera\xE7\xF5es"))), tab === 'tax' && function () {
    var r = TAX_REGIMES[taxRegime];
    var rateRows = [{
      label: 'ISS',
      val: r.iss ? (r.iss * 100).toFixed(0) + '%' : 'Incluso no DAS',
      sub: 'Imposto Sobre Serviços — alíquota municipal'
    }, {
      label: 'PIS',
      val: r.pis ? (r.pis * 100).toFixed(2) + '%' : 'Incluso no DAS',
      sub: r.pisLabel || 'Unificado no DAS'
    }, {
      label: 'COFINS',
      val: r.cofins ? (r.cofins * 100).toFixed(2) + '%' : 'Incluso no DAS',
      sub: r.cofinsLabel || 'Unificado no DAS'
    }, {
      label: 'IRPJ',
      val: r.irpjLabel ? '15% + 10% adic.' : 'Incluso no DAS',
      sub: r.irpjLabel || 'Unificado no DAS'
    }, {
      label: 'CSLL',
      val: r.csllLabel ? '9%' : 'Incluso no DAS',
      sub: r.csllLabel || 'Unificado no DAS'
    }].concat(_toConsumableArray(r.dasRate ? [{
      label: 'DAS',
      val: (r.dasRate * 100).toFixed(1) + '%',
      sub: r.dasLabel
    }] : []));
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-5"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-base font-semibold text-gray-800"
    }, "Regime Tribut\xE1rio"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, "Define como os impostos s\xE3o calculados em todo o sistema")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-4"
    }, Object.entries(TAX_REGIMES).map(function (_ref75) {
      var _ref76 = _slicedToArray(_ref75, 2),
        key = _ref76[0],
        reg = _ref76[1];
      return /*#__PURE__*/React.createElement("button", {
        key: key,
        onClick: function onClick() {
          setTaxRegime(key);
          localStorage.setItem('opticom_taxRegime', key);
        },
        className: "text-left p-4 rounded-xl border-2 transition-all ".concat(taxRegime === key ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 mb-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-2.5 h-2.5 rounded-full ".concat(reg.dot)
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-bold px-2 py-0.5 rounded-full ".concat(reg.color)
      }, reg.label), taxRegime === key && /*#__PURE__*/React.createElement("span", {
        className: "ml-auto text-blue-600 text-xs font-bold"
      }, "\u2713 Ativo")), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500 leading-relaxed"
      }, reg.method), /*#__PURE__*/React.createElement("span", {
        className: "inline-block mt-2 text-xs px-2 py-0.5 rounded ".concat(reg.obColor, " font-medium")
      }, reg.obligation));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-5"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-base font-semibold text-gray-800"
    }, "Al\xEDquotas Aplic\xE1veis"), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold px-2.5 py-1 rounded-full ".concat(r.color)
    }, r.label)), /*#__PURE__*/React.createElement("div", {
      className: "divide-y divide-gray-100"
    }, rateRows.map(function (row, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex items-center justify-between py-3"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "text-sm font-semibold text-gray-800"
      }, row.label), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 mt-0.5"
      }, row.sub)), /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-lg"
      }, row.val));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-5 py-4 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-semibold text-gray-800"
    }, "Comparativo entre Regimes \u2014 Q1 2026"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, "Impacto fiscal estimado com base na receita bruta de R$ 48.400.000")), /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-gray-50 border-b border-gray-200"
    }, /*#__PURE__*/React.createElement("tr", null, ['Indicador', 'Lucro Real', 'Lucro Presumido', 'Simples Nacional'].map(function (h) {
      return /*#__PURE__*/React.createElement("th", {
        key: h,
        className: "px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
      }, h);
    }))), /*#__PURE__*/React.createElement("tbody", {
      className: "divide-y divide-gray-100"
    }, [{
      l: 'Total Deduções',
      real: TAX_REGIMES.REAL.dre26.totalDed,
      pres: TAX_REGIMES.PRESUMIDO.dre26.totalDed,
      simp: TAX_REGIMES.SIMPLES.dre26.totalDed
    }, {
      l: 'Receita Líquida',
      real: TAX_REGIMES.REAL.dre26.rl,
      pres: TAX_REGIMES.PRESUMIDO.dre26.rl,
      simp: TAX_REGIMES.SIMPLES.dre26.rl
    }, {
      l: 'EBITDA',
      real: TAX_REGIMES.REAL.dre26.ebitda,
      pres: TAX_REGIMES.PRESUMIDO.dre26.ebitda,
      simp: TAX_REGIMES.SIMPLES.dre26.ebitda
    }, {
      l: 'Total Impostos',
      real: TAX_REGIMES.REAL.dre26.totalImp,
      pres: TAX_REGIMES.PRESUMIDO.dre26.totalImp,
      simp: TAX_REGIMES.SIMPLES.dre26.totalImp
    }, {
      l: 'Lucro Líquido',
      real: TAX_REGIMES.REAL.dre26.ll,
      pres: TAX_REGIMES.PRESUMIDO.dre26.ll,
      simp: TAX_REGIMES.SIMPLES.dre26.ll
    }].map(function (row, i) {
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        className: "hover:bg-gray-50 ".concat(i === 4 ? 'font-semibold bg-gray-50' : '')
      }, /*#__PURE__*/React.createElement("td", {
        className: "px-4 py-3 text-gray-700"
      }, row.l), [{
        k: 'real',
        v: row.real,
        rk: 'REAL'
      }, {
        k: 'pres',
        v: row.pres,
        rk: 'PRESUMIDO'
      }, {
        k: 'simp',
        v: row.simp,
        rk: 'SIMPLES'
      }].map(function (_ref77) {
        var v = _ref77.v,
          rk = _ref77.rk;
        return /*#__PURE__*/React.createElement("td", {
          key: rk,
          className: "px-4 py-3 text-right font-mono text-xs ".concat(taxRegime === rk ? 'font-bold text-blue-700 bg-blue-50' : v < 0 ? 'text-red-600' : 'text-gray-700')
        }, v < 0 ? "(".concat(fmt(Math.abs(v)), ")") : fmt(v), taxRegime === rk && /*#__PURE__*/React.createElement("span", {
          className: "ml-1 text-blue-400"
        }, "\u25C4"));
      }));
    })))), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-end"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setToast("Regime ".concat(r.label, " salvo e aplicado ao sistema!"));
      },
      className: "px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
    }, "Confirmar Regime")));
  }(), tab === 'financial' && function () {
    var activeBanks = bankAccounts.filter(function (b) {
      return b.active !== false;
    });
    var activePayTotal = payMethods.filter(function (p) {
      return p.active !== false;
    }).length;
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-semibold text-gray-800 mb-4"
    }, "Categorias de Lan\xE7amentos"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-6"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-green-500"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-gray-600 uppercase tracking-wide"
    }, "Categorias de Receita")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-1 mb-3"
    }, incomeCats.map(function (c) {
      return /*#__PURE__*/React.createElement("div", {
        key: c.id,
        className: "flex items-center justify-between bg-green-50 rounded-lg px-3 py-1.5"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-sm text-green-800"
      }, c.name), /*#__PURE__*/React.createElement("button", {
        onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee41() {
          var r;
          return _regenerator().w(function (_context41) {
            while (1) switch (_context41.n) {
              case 0:
                _context41.n = 1;
                return api.deleteCategory('income', c.id);
              case 1:
                r = _context41.v;
                if (r.success) setIncomeCats(function (p) {
                  return p.filter(function (x) {
                    return x.id !== c.id;
                  });
                });else setToast(r.error || 'Erro ao remover categoria');
              case 2:
                return _context41.a(2);
            }
          }, _callee41);
        })),
        className: "text-xs text-red-400 hover:text-red-600"
      }, "\u2715"));
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      value: newCatType === 'income' ? newCat : '',
      onChange: function onChange(e) {
        setNewCat(e.target.value);
        setNewCatType('income');
      },
      placeholder: "Nova categoria...",
      className: "flex-1 border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee42() {
        var r;
        return _regenerator().w(function (_context42) {
          while (1) switch (_context42.n) {
            case 0:
              if (!(!newCat.trim() || newCatType !== 'income')) {
                _context42.n = 1;
                break;
              }
              return _context42.a(2);
            case 1:
              _context42.n = 2;
              return api.createCategory('income', {
                name: newCat.trim()
              });
            case 2:
              r = _context42.v;
              if (r.success) {
                setIncomeCats(function (p) {
                  return [].concat(_toConsumableArray(p), [r.data]);
                });
                setNewCat('');
              } else setToast(r.error || 'Erro ao criar categoria');
            case 3:
              return _context42.a(2);
          }
        }, _callee42);
      })),
      className: "px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
    }, "+ Add"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-red-500"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-gray-600 uppercase tracking-wide"
    }, "Categorias de Despesa")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-1 mb-3"
    }, expenseCats.map(function (c) {
      return /*#__PURE__*/React.createElement("div", {
        key: c.id,
        className: "flex items-center justify-between bg-red-50 rounded-lg px-3 py-1.5"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-sm text-red-800"
      }, c.name), /*#__PURE__*/React.createElement("button", {
        onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee43() {
          var r;
          return _regenerator().w(function (_context43) {
            while (1) switch (_context43.n) {
              case 0:
                _context43.n = 1;
                return api.deleteCategory('expense', c.id);
              case 1:
                r = _context43.v;
                if (r.success) setExpenseCats(function (p) {
                  return p.filter(function (x) {
                    return x.id !== c.id;
                  });
                });else setToast(r.error || 'Erro ao remover categoria');
              case 2:
                return _context43.a(2);
            }
          }, _callee43);
        })),
        className: "text-xs text-red-400 hover:text-red-600"
      }, "\u2715"));
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      value: newCatType === 'expense' ? newCat : '',
      onChange: function onChange(e) {
        setNewCat(e.target.value);
        setNewCatType('expense');
      },
      placeholder: "Nova categoria...",
      className: "flex-1 border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee44() {
        var r;
        return _regenerator().w(function (_context44) {
          while (1) switch (_context44.n) {
            case 0:
              if (!(!newCat.trim() || newCatType !== 'expense')) {
                _context44.n = 1;
                break;
              }
              return _context44.a(2);
            case 1:
              _context44.n = 2;
              return api.createCategory('expense', {
                name: newCat.trim()
              });
            case 2:
              r = _context44.v;
              if (r.success) {
                setExpenseCats(function (p) {
                  return [].concat(_toConsumableArray(p), [r.data]);
                });
                setNewCat('');
              } else setToast(r.error || 'Erro ao criar categoria');
            case 3:
              return _context44.a(2);
          }
        }, _callee44);
      })),
      className: "px-3 py-1.5 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
    }, "+ Add"))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-semibold text-gray-800"
    }, "Contas Banc\xE1rias"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, activeBanks.length, " conta(s) ativa(s) \xB7 Saldo total: ", fmt(activeBanks.reduce(function (s, b) {
      return s + b.balance;
    }, 0))))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 mb-4"
    }, bankAccounts.map(function (b) {
      return /*#__PURE__*/React.createElement("div", {
        key: b.id,
        className: "flex items-center gap-4 p-3 rounded-xl border ".concat(b.active ? 'border-gray-200 bg-white' : 'border-gray-100 bg-gray-50 opacity-60')
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs"
      }, (b.bank || b.name || '?')[0]), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm font-semibold text-gray-800"
      }, b.bank || b.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, "Ag. ", b.agency, " \xB7 CC ", b.account, " \xB7 ", b.type)), /*#__PURE__*/React.createElement("p", {
        className: "text-sm font-semibold text-green-700"
      }, fmt(b.balance)), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setBankAccounts(function (p) {
            return p.map(function (x) {
              return x.id === b.id ? _objectSpread(_objectSpread({}, x), {}, {
                active: !x.active
              }) : x;
            });
          });
        },
        className: "text-xs px-2.5 py-1 rounded-full font-medium ".concat(b.active ? 'bg-green-100 text-green-700 hover:bg-red-50 hover:text-red-600' : 'bg-gray-100 text-gray-500 hover:bg-green-50 hover:text-green-600')
      }, b.active ? 'Ativa' : 'Inativa'), /*#__PURE__*/React.createElement("button", {
        onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee45() {
          var r;
          return _regenerator().w(function (_context45) {
            while (1) switch (_context45.n) {
              case 0:
                _context45.n = 1;
                return api.deleteBankAccount(b.id);
              case 1:
                r = _context45.v;
                if (r.success) setBankAccounts(function (p) {
                  return p.filter(function (x) {
                    return x.id !== b.id;
                  });
                });else setToast(r.error || 'Erro ao remover conta');
              case 2:
                return _context45.a(2);
            }
          }, _callee45);
        })),
        className: "text-xs text-gray-300 hover:text-red-500"
      }, "\u2715"));
    })), /*#__PURE__*/React.createElement("div", {
      className: "border-t border-gray-100 pt-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-gray-500 mb-3"
    }, "Adicionar Conta"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3"
    }, [{
      label: 'Banco *',
      key: 'bank',
      placeholder: 'Ex: Santander'
    }, {
      label: 'Agência',
      key: 'agency',
      placeholder: '0000-0'
    }, {
      label: 'Conta *',
      key: 'account',
      placeholder: '00000-0'
    }].map(function (f) {
      return /*#__PURE__*/React.createElement("div", {
        key: f.key
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, f.label), /*#__PURE__*/React.createElement("input", {
        value: newBank[f.key],
        onChange: function onChange(e) {
          return setNewBank(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
          });
        },
        placeholder: f.placeholder,
        className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      }));
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-xs text-gray-500 mb-1"
    }, "Tipo"), /*#__PURE__*/React.createElement("select", {
      value: newBank.type,
      onChange: function onChange(e) {
        return setNewBank(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            type: e.target.value
          });
        });
      },
      className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
    }, ['Corrente', 'Poupança', 'Pagamento'].map(function (t) {
      return /*#__PURE__*/React.createElement("option", {
        key: t
      }, t);
    })))), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee46() {
        var displayName, r;
        return _regenerator().w(function (_context46) {
          while (1) switch (_context46.n) {
            case 0:
              if (!(!newBank.bank.trim() || !newBank.account.trim())) {
                _context46.n = 1;
                break;
              }
              return _context46.a(2);
            case 1:
              displayName = newBank.agency ? "".concat(newBank.bank, " Ag.").concat(newBank.agency, " CC ").concat(newBank.account) : "".concat(newBank.bank, " CC ").concat(newBank.account);
              _context46.n = 2;
              return api.createBankAccount({
                name: displayName,
                bank_name: newBank.bank,
                account_number: newBank.account
              });
            case 2:
              r = _context46.v;
              if (r.success) {
                setBankAccounts(function (p) {
                  return [].concat(_toConsumableArray(p), [_objectSpread(_objectSpread({}, r.data), {}, {
                    bank: r.data.bank_name || newBank.bank,
                    account: r.data.account_number || newBank.account,
                    agency: newBank.agency,
                    type: newBank.type,
                    balance: 0,
                    active: true
                  })]);
                });
                setNewBank({
                  bank: '',
                  agency: '',
                  account: '',
                  type: 'Corrente'
                });
                setToast('Conta bancária adicionada!');
              } else {
                setToast(r.error || 'Erro ao adicionar conta');
              }
            case 3:
              return _context46.a(2);
          }
        }, _callee46);
      })),
      className: "mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
    }, "Adicionar Conta"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-semibold text-gray-800"
    }, "Formas de Pagamento"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, activePayTotal, " forma(s) ativa(s)"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-2 mb-4"
    }, payMethods.map(function (m) {
      return /*#__PURE__*/React.createElement("div", {
        key: m.id,
        className: "flex items-center justify-between p-3 rounded-xl border ".concat(m.active ? 'border-blue-200 bg-blue-50' : 'border-gray-100 bg-gray-50')
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-medium ".concat(m.active ? 'text-blue-800' : 'text-gray-400')
      }, m.name), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setPayMethods(function (p) {
            return p.map(function (x) {
              return x.id === m.id ? _objectSpread(_objectSpread({}, x), {}, {
                active: !x.active
              }) : x;
            });
          });
        },
        className: "w-9 h-5 rounded-full transition-colors relative ".concat(m.active ? 'bg-blue-500' : 'bg-gray-300')
      }, /*#__PURE__*/React.createElement("span", {
        className: "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ".concat(m.active ? 'left-4' : 'left-0.5')
      })), /*#__PURE__*/React.createElement("button", {
        onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee47() {
          var r;
          return _regenerator().w(function (_context47) {
            while (1) switch (_context47.n) {
              case 0:
                _context47.n = 1;
                return api.deletePaymentMethod(m.id);
              case 1:
                r = _context47.v;
                if (r.success) setPayMethods(function (p) {
                  return p.filter(function (x) {
                    return x.id !== m.id;
                  });
                });else setToast(r.error || 'Erro ao remover método');
              case 2:
                return _context47.a(2);
            }
          }, _callee47);
        })),
        className: "text-xs text-gray-300 hover:text-red-500"
      }, "\u2715")));
    })), /*#__PURE__*/React.createElement("div", {
      className: "border-t border-gray-100 pt-4 flex gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      value: newPay,
      onChange: function onChange(e) {
        return setNewPay(e.target.value);
      },
      placeholder: "Nova forma de pagamento...",
      className: "flex-1 border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee48() {
        var r;
        return _regenerator().w(function (_context48) {
          while (1) switch (_context48.n) {
            case 0:
              if (newPay.trim()) {
                _context48.n = 1;
                break;
              }
              return _context48.a(2);
            case 1:
              _context48.n = 2;
              return api.createPaymentMethod({
                name: newPay.trim()
              });
            case 2:
              r = _context48.v;
              if (r.success) {
                setPayMethods(function (p) {
                  return [].concat(_toConsumableArray(p), [_objectSpread(_objectSpread({}, r.data), {}, {
                    active: true
                  })]);
                });
                setNewPay('');
              } else setToast(r.error || 'Erro ao criar método');
            case 3:
              return _context48.a(2);
          }
        }, _callee48);
      })),
      className: "px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
    }, "Adicionar"))));
  }(), tab === 'accounts' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold text-gray-800"
  }, "Saldo Inicial das Contas Banc\xE1rias"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "O saldo inicial \xE9 usado no DFC para calcular o Saldo Final Projetado de Caixa")), bankAccounts.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 text-center py-6"
  }, "Nenhuma conta banc\xE1ria cadastrada") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, bankAccounts.map(function (b) {
    var cur = initBalEdit[b.id] !== undefined ? initBalEdit[b.id] : ((b.initial_balance || 0) / 100).toFixed(2).replace('.', ',');
    return /*#__PURE__*/React.createElement("div", {
      key: b.id,
      className: "flex items-center gap-4 p-3 rounded-xl border border-gray-200 bg-gray-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs shrink-0"
    }, (b.bank_name || b.name || '?')[0]), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-800"
    }, b.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, b.bank_name || '—')), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-500"
    }, "R$"), /*#__PURE__*/React.createElement("input", {
      value: cur,
      onChange: function onChange(e) {
        return setInitBalEdit(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, b.id, e.target.value));
        });
      },
      className: "w-32 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-right focus:outline-none focus:ring-2 focus:ring-blue-500",
      placeholder: "0,00"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return saveInitBal(b.id);
      },
      disabled: savingBal[b.id],
      className: "px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
    }, savingBal[b.id] ? '...' : 'Salvar')));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold text-gray-800"
  }, "Registrar Investimento"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Compra de equipamentos, ve\xEDculos, infraestrutura \u2014 lan\xE7ado como despesa de Investimento no DFC")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs text-gray-500 mb-1"
  }, "Descri\xE7\xE3o *"), /*#__PURE__*/React.createElement("input", {
    value: newInvest.description,
    onChange: function onChange(e) {
      return setNewInvest(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          description: e.target.value
        });
      });
    },
    placeholder: "Ex: Compra de ve\xEDculo Fiorino 2024",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs text-gray-500 mb-1"
  }, "Valor (R$) *"), /*#__PURE__*/React.createElement("input", {
    value: newInvest.amount,
    onChange: function onChange(e) {
      return setNewInvest(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          amount: e.target.value
        });
      });
    },
    placeholder: "0,00",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs text-gray-500 mb-1"
  }, "Data *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: newInvest.due_date,
    onChange: function onChange(e) {
      return setNewInvest(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          due_date: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs text-gray-500 mb-1"
  }, "Conta Banc\xE1ria"), /*#__PURE__*/React.createElement("select", {
    value: newInvest.bank_account_id,
    onChange: function onChange(e) {
      return setNewInvest(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          bank_account_id: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecionar conta..."), bankAccounts.map(function (b) {
    return /*#__PURE__*/React.createElement("option", {
      key: b.id,
      value: b.id
    }, b.name);
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: addInvestment,
    className: "px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Registrar Investimento"), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 border-t border-gray-100 pt-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3"
  }, "Hist\xF3rico de Investimentos"), investLoading ? /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 text-center py-4"
  }, "Carregando...") : investList.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 text-center py-4"
  }, "Nenhum investimento registrado") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, investList.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: "flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-800"
    }, t.description), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, fmtDate(t.due_date))), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-red-700"
    }, fmt(t.amount)), /*#__PURE__*/React.createElement(Badge, {
      status: t.status
    })));
  }))))), tab === 'users' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-600"
  }, users.filter(function (u) {
    return u.status === 'ACTIVE';
  }).length, " usu\xE1rios ativos"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setInviteModal(true);
    },
    className: "flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), " Convidar Usu\xE1rio")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("tr", null, ['Usuário', 'E-mail', 'Perfil', 'Último Login', 'Status', ''].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      className: "px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, h);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100"
  }, users.map(function (u) {
    var _api$user, _api$user2, _api$user3;
    return /*#__PURE__*/React.createElement("tr", {
      key: u.id,
      className: "hover:bg-gray-50"
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shrink-0"
    }, (u.name || '?')[0]), /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-gray-800"
    }, u.name))), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-600 text-xs"
    }, u.email), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement(Badge, {
      status: u.role
    })), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500"
    }, u.last_login ? new Date(u.last_login).toLocaleDateString('pt-BR') : u.lastLogin || '—'), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement(Badge, {
      status: u.status
    })), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setEditUserModal({
          id: u.id,
          name: u.name,
          email: u.email,
          role: u.role
        });
      },
      className: "text-xs text-blue-600 hover:underline"
    }, "Editar"), u.status === 'ACTIVE' && u.id !== ((_api$user = api.user) === null || _api$user === void 0 ? void 0 : _api$user.id) && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return deactivateUser(u.id);
      },
      className: "text-xs text-amber-600 hover:underline"
    }, "Desativar"), u.id !== ((_api$user2 = api.user) === null || _api$user2 === void 0 ? void 0 : _api$user2.id) && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setDeleteConfirm({
          id: u.id,
          name: u.name
        });
      },
      className: "text-xs text-red-500 hover:underline"
    }, "Excluir"), u.id === ((_api$user3 = api.user) === null || _api$user3 === void 0 ? void 0 : _api$user3.id) && /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-300"
    }, "voc\xEA"))));
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: !!deleteConfirm,
    onClose: function onClose() {
      return setDeleteConfirm(null);
    },
    title: "Excluir Usu\xE1rio",
    size: "sm"
  }, deleteConfirm && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50 border border-red-200 rounded-lg p-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-red-800"
  }, "Esta a\xE7\xE3o \xE9 irrevers\xEDvel."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-red-700 mt-1"
  }, "O usu\xE1rio ", /*#__PURE__*/React.createElement("strong", null, deleteConfirm.name), " ser\xE1 exclu\xEDdo permanentemente do sistema, incluindo seu hist\xF3rico de acesso.")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setDeleteConfirm(null);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return deleteUserPermanent(deleteConfirm.id);
    },
    className: "flex-1 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
  }, "Confirmar Exclus\xE3o")))), /*#__PURE__*/React.createElement(Modal, {
    open: inviteModal,
    onClose: function onClose() {
      return setInviteModal(false);
    },
    title: "Convidar Usu\xE1rio",
    size: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, [{
    label: 'Nome',
    key: 'name',
    placeholder: 'Nome completo',
    type: 'text'
  }, {
    label: 'E-mail',
    key: 'email',
    placeholder: 'email@empresa.com.br',
    type: 'email'
  }, {
    label: 'Senha inicial',
    key: 'password',
    placeholder: 'Mínimo 6 caracteres',
    type: 'password'
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.key
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, f.label), /*#__PURE__*/React.createElement("input", {
      type: f.type,
      value: inviteForm[f.key],
      onChange: function onChange(e) {
        return setInviteForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, f.key, e.target.value));
        });
      },
      placeholder: f.placeholder,
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    }));
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Perfil"), /*#__PURE__*/React.createElement("select", {
    value: inviteForm.role,
    onChange: function onChange(e) {
      return setInviteForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          role: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ADMIN"
  }, "Administrador"), /*#__PURE__*/React.createElement("option", {
    value: "MANAGER"
  }, "Gerente"), /*#__PURE__*/React.createElement("option", {
    value: "TECHNICIAN"
  }, "T\xE9cnico"))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setInviteModal(false);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: invite,
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Enviar Convite")))), /*#__PURE__*/React.createElement(Modal, {
    open: !!editUserModal,
    onClose: function onClose() {
      return setEditUserModal(null);
    },
    title: "Editar Usu\xE1rio",
    size: "sm"
  }, editUserModal && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Nome"), /*#__PURE__*/React.createElement("input", {
    value: editUserModal.name,
    onChange: function onChange(e) {
      return setEditUserModal(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          name: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "E-mail"), /*#__PURE__*/React.createElement("input", {
    value: editUserModal.email,
    disabled: true,
    className: "w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-400 cursor-not-allowed"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1"
  }, "O e-mail n\xE3o pode ser alterado por aqui")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Perfil"), /*#__PURE__*/React.createElement("select", {
    value: editUserModal.role,
    onChange: function onChange(e) {
      return setEditUserModal(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          role: e.target.value
        });
      });
    },
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ADMIN"
  }, "Administrador"), /*#__PURE__*/React.createElement("option", {
    value: "MANAGER"
  }, "Gerente"), /*#__PURE__*/React.createElement("option", {
    value: "TECHNICIAN"
  }, "T\xE9cnico"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Nova senha ", /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400 font-normal"
  }, "(opcional)")), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: editUserModal.newPassword || '',
    onChange: function onChange(e) {
      return setEditUserModal(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          newPassword: e.target.value
        });
      });
    },
    placeholder: "Deixe em branco para n\xE3o alterar",
    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditUserModal(null);
    },
    className: "flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: updateUser,
    className: "flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Salvar")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold text-gray-800"
  }, "Permiss\xF5es por Perfil"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Defina quais m\xF3dulos cada perfil pode acessar. Administrador tem acesso total.")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return savePermissions && savePermissions(_objectSpread({}, DEFAULT_PERMISSIONS));
    },
    className: "px-4 py-1.5 border border-gray-300 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-50"
  }, "Redefinir Padr\xF5es")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("th", {
    className: "pb-2 text-left text-xs font-semibold text-gray-500 w-48"
  }, "M\xF3dulo"), /*#__PURE__*/React.createElement("th", {
    className: "pb-2 text-center text-xs font-semibold text-gray-400 w-28"
  }, "ADMIN", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-normal text-gray-300"
  }, "sempre total")), /*#__PURE__*/React.createElement("th", {
    className: "pb-2 text-center text-xs font-semibold text-blue-600 w-28"
  }, "GERENTE"), /*#__PURE__*/React.createElement("th", {
    className: "pb-2 text-center text-xs font-semibold text-green-600 w-28"
  }, "T\xC9CNICO"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-50"
  }, MENU.map(function (m) {
    var managerHas = (permissions.MANAGER || []).includes(m.id);
    var techHas = (permissions.TECHNICIAN || []).includes(m.id);
    var toggle = function toggle(role, id) {
      var cur = permissions[role] || [];
      var next = cur.includes(id) ? cur.filter(function (x) {
        return x !== id;
      }) : [].concat(_toConsumableArray(cur), [id]);
      savePermissions && savePermissions(_objectSpread(_objectSpread({}, permissions), {}, _defineProperty({}, role, next)));
    };
    return /*#__PURE__*/React.createElement("tr", {
      key: m.id,
      className: "hover:bg-gray-50"
    }, /*#__PURE__*/React.createElement("td", {
      className: "py-2.5 text-gray-700 font-medium"
    }, m.label), /*#__PURE__*/React.createElement("td", {
      className: "py-2.5 text-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-300 text-lg"
    }, "\u2713")), /*#__PURE__*/React.createElement("td", {
      className: "py-2.5 text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggle('MANAGER', m.id);
      },
      className: "w-9 h-5 rounded-full transition-colors relative ".concat(managerHas ? 'bg-blue-500' : 'bg-gray-200')
    }, /*#__PURE__*/React.createElement("span", {
      className: "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ".concat(managerHas ? 'left-4' : 'left-0.5')
    }))), /*#__PURE__*/React.createElement("td", {
      className: "py-2.5 text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggle('TECHNICIAN', m.id);
      },
      className: "w-9 h-5 rounded-full transition-colors relative ".concat(techHas ? 'bg-green-500' : 'bg-gray-200')
    }, /*#__PURE__*/React.createElement("span", {
      className: "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ".concat(techHas ? 'left-4' : 'left-0.5')
    }))));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold text-gray-800"
  }, "Submenus do Financeiro"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Controle quais abas do m\xF3dulo Financeiro cada perfil pode visualizar. Administrador sempre tem acesso total.")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("th", {
    className: "pb-2 text-left text-xs font-semibold text-gray-500 w-48"
  }, "Submenu"), /*#__PURE__*/React.createElement("th", {
    className: "pb-2 text-center text-xs font-semibold text-gray-400 w-28"
  }, "ADMIN", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-normal text-gray-300"
  }, "sempre total")), /*#__PURE__*/React.createElement("th", {
    className: "pb-2 text-center text-xs font-semibold text-blue-600 w-28"
  }, "GERENTE"), /*#__PURE__*/React.createElement("th", {
    className: "pb-2 text-center text-xs font-semibold text-green-600 w-28"
  }, "T\xC9CNICO"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-50"
  }, [{
    id: 'receivable',
    label: 'A Receber'
  }, {
    id: 'payable',
    label: 'A Pagar'
  }, {
    id: 'cashflow',
    label: 'Fluxo de Caixa'
  }, {
    id: 'dre',
    label: 'DRE Gerencial'
  }, {
    id: 'payroll',
    label: 'Folha Salarial'
  }, {
    id: 'approval',
    label: 'Aprovações do Dia'
  }, {
    id: 'statement',
    label: 'Extrato Bancário'
  }].map(function (s) {
    var managerHas = (permissions.MANAGER_fin || []).includes(s.id);
    var techHas = (permissions.TECHNICIAN_fin || []).includes(s.id);
    var toggleFin = function toggleFin(role, id) {
      var key = "".concat(role, "_fin");
      var cur = permissions[key] || [];
      var next = cur.includes(id) ? cur.filter(function (x) {
        return x !== id;
      }) : [].concat(_toConsumableArray(cur), [id]);
      savePermissions && savePermissions(_objectSpread(_objectSpread({}, permissions), {}, _defineProperty({}, key, next)));
    };
    return /*#__PURE__*/React.createElement("tr", {
      key: s.id,
      className: "hover:bg-gray-50"
    }, /*#__PURE__*/React.createElement("td", {
      className: "py-2.5 text-gray-700 font-medium pl-2"
    }, s.label), /*#__PURE__*/React.createElement("td", {
      className: "py-2.5 text-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-300 text-lg"
    }, "\u2713")), /*#__PURE__*/React.createElement("td", {
      className: "py-2.5 text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggleFin('MANAGER', s.id);
      },
      className: "w-9 h-5 rounded-full transition-colors relative ".concat(managerHas ? 'bg-blue-500' : 'bg-gray-200')
    }, /*#__PURE__*/React.createElement("span", {
      className: "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ".concat(managerHas ? 'left-4' : 'left-0.5')
    }))), /*#__PURE__*/React.createElement("td", {
      className: "py-2.5 text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggleFin('TECHNICIAN', s.id);
      },
      className: "w-9 h-5 rounded-full transition-colors relative ".concat(techHas ? 'bg-green-500' : 'bg-gray-200')
    }, /*#__PURE__*/React.createElement("span", {
      className: "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ".concat(techHas ? 'left-4' : 'left-0.5')
    }))));
  })))))), tab === 'notifications' && /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-semibold text-gray-800"
  }, "Prefer\xEAncias de Notifica\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Controle como e quando voc\xEA recebe alertas")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2"
  }, "Canal"), [['email', 'Notificações por E-mail'], ['sms', 'Notificações por SMS']].map(function (_ref86) {
    var _ref87 = _slicedToArray(_ref86, 2),
      k = _ref87[0],
      l = _ref87[1];
    return /*#__PURE__*/React.createElement("label", {
      key: k,
      className: "flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-700"
    }, l), /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return setNotif(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, !p[k]));
        });
      },
      className: "relative w-10 h-5 rounded-full transition-colors cursor-pointer ".concat(notif[k] ? 'bg-blue-600' : 'bg-gray-200')
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ".concat(notif[k] ? 'translate-x-5' : 'translate-x-0.5')
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 border-t border-gray-100 pt-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2"
  }, "Eventos"), [['lowStock', 'Estoque abaixo do mínimo'], ['osOverdue', 'OS em atraso'], ['contractExpiring', 'Contratos expirando (30 dias)'], ['payments', 'Cobranças vencidas']].map(function (_ref88) {
    var _ref89 = _slicedToArray(_ref88, 2),
      k = _ref89[0],
      l = _ref89[1];
    return /*#__PURE__*/React.createElement("label", {
      key: k,
      className: "flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-700"
    }, l), /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return setNotif(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, !p[k]));
        });
      },
      className: "relative w-10 h-5 rounded-full transition-colors cursor-pointer ".concat(notif[k] ? 'bg-blue-600' : 'bg-gray-200')
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ".concat(notif[k] ? 'translate-x-5' : 'translate-x-0.5')
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end pt-2 border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: saveNotif,
    className: "px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Salvar Prefer\xEAncias"))), tab === 'sla' && /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-semibold text-gray-800"
  }, "Configura\xE7\xE3o de SLA"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Tempo m\xE1ximo de atendimento por prioridade")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, [['urgent', 'Urgente', 'Falha crítica em andamento'], ['high', 'Alta', 'Impacto operacional significativo'], ['medium', 'Média', 'Degradação parcial do serviço'], ['low', 'Baixa', 'Solicitação de melhoria']].map(function (_ref90) {
    var _ref91 = _slicedToArray(_ref90, 3),
      k = _ref91[0],
      l = _ref91[1],
      sub = _ref91[2];
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-800"
    }, l), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, sub)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: sla[k],
      onChange: function onChange(e) {
        return setSla(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, parseInt(e.target.value) || 0));
        });
      },
      className: "w-20 border border-gray-300 rounded-lg px-3 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-500"
    }, "horas")));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end pt-2 border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: saveSla,
    className: "px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
  }, "Salvar SLAs"))), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast,
    onClose: function onClose() {
      return setToast(null);
    }
  }));
};

// ─── AUDIT ────────────────────────────────────────────────────────────────────

var AuditPage = function AuditPage() {
  var _useState267 = useState([]),
    _useState268 = _slicedToArray(_useState267, 2),
    logs = _useState268[0],
    setLogs = _useState268[1];
  var _useState269 = useState(true),
    _useState270 = _slicedToArray(_useState269, 2),
    loading = _useState270[0],
    setLoading = _useState270[1];
  var _useState271 = useState('all'),
    _useState272 = _slicedToArray(_useState271, 2),
    moduleF = _useState272[0],
    setModuleF = _useState272[1];
  var _useState273 = useState('all'),
    _useState274 = _slicedToArray(_useState273, 2),
    userF = _useState274[0],
    setUserF = _useState274[1];
  var _useState275 = useState(''),
    _useState276 = _slicedToArray(_useState275, 2),
    q = _useState276[0],
    setQ = _useState276[1];
  useEffect(function () {
    api.getAuditLogs({
      limit: 200
    }).then(function (r) {
      var _r$data0;
      if (r.success) setLogs(Array.isArray(r.data) ? r.data : ((_r$data0 = r.data) === null || _r$data0 === void 0 ? void 0 : _r$data0.data) || []);
      setLoading(false);
    });
  }, []);
  var fmtLog = function fmtLog(iso) {
    return iso ? new Date(iso).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }) : '—';
  };
  var today = new Date().toLocaleDateString('pt-BR');
  var modules = ['all'].concat(_toConsumableArray(new Set(logs.map(function (a) {
    return a.module;
  }))));
  var userNames = ['all'].concat(_toConsumableArray(new Set(logs.map(function (a) {
    return a.user_name || a.user_id || '?';
  }))));
  var filtered = logs.filter(function (a) {
    return (moduleF === 'all' || a.module === moduleF) && (userF === 'all' || (a.user_name || a.user_id) === userF) && (!q || (a.action || '').toLowerCase().includes(q.toLowerCase()) || (a.detail || '').toLowerCase().includes(q.toLowerCase()));
  });
  var moduleColors = {
    OS: 'bg-blue-50 text-blue-700',
    Financeiro: 'bg-green-50 text-green-700',
    Contratos: 'bg-purple-50 text-purple-700',
    Clientes: 'bg-orange-50 text-orange-700',
    Estoque: 'bg-amber-50 text-amber-700',
    Sistema: 'bg-gray-100 text-gray-600',
    Técnicos: 'bg-teal-50 text-teal-700',
    Frota: 'bg-cyan-50 text-cyan-700',
    Usuários: 'bg-violet-50 text-violet-700'
  };
  var todayCount = logs.filter(function (a) {
    return a.created_at && new Date(a.created_at).toLocaleDateString('pt-BR') === today;
  }).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "p-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement(KPI, {
    title: "Eventos Hoje",
    value: loading ? '…' : todayCount,
    sub: today,
    icon: "audit",
    color: "blue"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "Usu\xE1rios Ativos",
    value: loading ? '…' : new Set(logs.map(function (a) {
      return a.user_id;
    })).size,
    sub: "neste per\xEDodo",
    icon: "technicians",
    color: "green"
  }), /*#__PURE__*/React.createElement(KPI, {
    title: "M\xF3dulos Usados",
    value: loading ? '…' : new Set(logs.map(function (a) {
      return a.module;
    })).size,
    sub: "\xE1reas acessadas",
    icon: "dashboard",
    color: "purple"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "Buscar a\xE7\xE3o ou detalhe...",
    className: "pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("select", {
    value: moduleF,
    onChange: function onChange(e) {
      return setModuleF(e.target.value);
    },
    className: "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, modules.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m,
      value: m
    }, m === 'all' ? 'Todos os módulos' : m);
  })), /*#__PURE__*/React.createElement("select", {
    value: userF,
    onChange: function onChange(e) {
      return setUserF(e.target.value);
    },
    className: "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
  }, userNames.map(function (u) {
    return /*#__PURE__*/React.createElement("option", {
      key: u,
      value: u
    }, u === 'all' ? 'Todos os usuários' : u);
  })), /*#__PURE__*/React.createElement("span", {
    className: "ml-auto text-xs text-gray-400"
  }, filtered.length, " eventos")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("tr", null, ['Data/Hora', 'Módulo', 'Ação', 'Detalhe'].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      className: "px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
    }, h);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100"
  }, loading && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "4",
    className: "px-4 py-10 text-center text-sm text-gray-400"
  }, "Carregando\u2026")), !loading && filtered.map(function (a) {
    return /*#__PURE__*/React.createElement("tr", {
      key: a.id,
      className: "hover:bg-gray-50"
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500 font-mono whitespace-nowrap"
    }, fmtLog(a.created_at)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded text-xs font-medium ".concat(moduleColors[a.module] || 'bg-gray-100 text-gray-600')
    }, a.module)), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-gray-700 font-medium"
    }, a.action), /*#__PURE__*/React.createElement("td", {
      className: "px-4 py-3 text-xs text-gray-500 max-w-xs truncate",
      title: a.detail
    }, a.detail));
  }), !loading && filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "4",
    className: "px-4 py-10 text-center text-sm text-gray-400"
  }, "Nenhum evento registrado ainda. A\xE7\xF5es no sistema ser\xE3o listadas aqui."))))));
};

// ─── APP ──────────────────────────────────────────────────────────────────────

function App() {
  var _useState277 = useState(true),
    _useState278 = _slicedToArray(_useState277, 2),
    loggedIn = _useState278[0],
    setLoggedIn = _useState278[1];
  var _useState279 = useState(true),
    _useState280 = _slicedToArray(_useState279, 2),
    loading = _useState280[0],
    setLoading = _useState280[1];
  var _useState281 = useState('dashboard_operacional'),
    _useState282 = _slicedToArray(_useState281, 2),
    page = _useState282[0],
    setPage = _useState282[1];
  var _useState283 = useState(function () {
      return api.user;
    }),
    _useState284 = _slicedToArray(_useState283, 2),
    user = _useState284[0],
    setUser = _useState284[1];
  var _useState285 = useState(false),
    _useState286 = _slicedToArray(_useState285, 2),
    collapsed = _useState286[0],
    setCollapsed = _useState286[1];
  // Regime tributário global — propagado por toda a aplicação
  var _useState287 = useState(function () {
      return localStorage.getItem('opticom_taxRegime') || 'REAL';
    }),
    _useState288 = _slicedToArray(_useState287, 2),
    taxRegime = _useState288[0],
    setTaxRegime = _useState288[1];
  // Permissões por perfil
  var _useState289 = useState(function () {
      try {
        return JSON.parse(localStorage.getItem('opticom_permissions')) || DEFAULT_PERMISSIONS;
      } catch (_unused5) {
        return DEFAULT_PERMISSIONS;
      }
    }),
    _useState290 = _slicedToArray(_useState289, 2),
    permissions = _useState290[0],
    setPermissions = _useState290[1];
  var savePermissions = function savePermissions(p) {
    setPermissions(p);
    localStorage.setItem('opticom_permissions', JSON.stringify(p));
  };
  // Configurações financeiras globais
  var _useState291 = useState([]),
    _useState292 = _slicedToArray(_useState291, 2),
    incomeCats = _useState292[0],
    setIncomeCats = _useState292[1];
  var _useState293 = useState([]),
    _useState294 = _slicedToArray(_useState293, 2),
    expenseCats = _useState294[0],
    setExpenseCats = _useState294[1];
  var _useState295 = useState(BANK_ACCOUNTS_INIT),
    _useState296 = _slicedToArray(_useState295, 2),
    bankAccounts = _useState296[0],
    setBankAccounts = _useState296[1];
  var _useState297 = useState(PAYMENT_METHODS_INIT),
    _useState298 = _slicedToArray(_useState297, 2),
    payMethods = _useState298[0],
    setPayMethods = _useState298[1];
  useEffect(function () {
    if (!api.token) return;
    api.getBankAccounts().then(function (r) {
      if (r.success) setBankAccounts((r.data || []).map(function (b) {
        return _objectSpread(_objectSpread({}, b), {}, {
          bank: b.bank_name || b.name || '',
          account: b.account_number || b.account || '',
          agency: b.agency || '—',
          type: b.type || 'Corrente',
          balance: b.balance || 0,
          active: b.active !== undefined ? b.active : true
        });
      }));
    });
    api.getPaymentMethods().then(function (r) {
      if (r.success) setPayMethods((r.data || []).map(function (m) {
        return _objectSpread(_objectSpread({}, m), {}, {
          active: m.active !== undefined ? m.active : true
        });
      }));
    });
    api.getCategories().then(function (r) {
      if (r.success) {
        var _r$data1, _r$data10;
        if ((_r$data1 = r.data) !== null && _r$data1 !== void 0 && _r$data1.income) setIncomeCats(r.data.income);
        if ((_r$data10 = r.data) !== null && _r$data10 !== void 0 && _r$data10.expense) setExpenseCats(r.data.expense);
      }
    });
  }, [loggedIn]);

  // Sincronizar loggedIn com token em sessionStorage
  // Verificar continuamente para detectar logout automático via 401
  useEffect(function () {
    var checkAuth = function checkAuth() {
      var token = sessionStorage.getItem('opticom_token');
      // api.user é restaurado do sessionStorage no constructor — basta checar o token
      var isAuthenticated = !!token;
      setLoggedIn(isAuthenticated);
    };

    // Check inicial
    checkAuth();
    setLoading(false);

    // Verificar a cada 500ms - detecta logout automático quando há erro 401
    var interval = setInterval(checkAuth, 500);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  if (!loggedIn) return /*#__PURE__*/React.createElement(LoginPage, {
    onLogin: function onLogin() {
      setUser(api.user);
      setLoggedIn(true);
    }
  });
  var renderPage = function renderPage() {
    var role = (user === null || user === void 0 ? void 0 : user.role) || 'TECHNICIAN';
    var allowed = new Set((permissions || DEFAULT_PERMISSIONS)[role] || []);
    if (page !== 'dashboard_operacional' && page !== 'dashboard_financial' && !allowed.has(page)) {
      return /*#__PURE__*/React.createElement("div", {
        className: "p-10 text-center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-400 text-sm"
      }, "Voc\xEA n\xE3o tem permiss\xE3o para acessar esta p\xE1gina."), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setPage('dashboard_operacional');
        },
        className: "mt-4 text-blue-600 text-sm hover:underline"
      }, "\u2190 Voltar ao Dashboard"));
    }
    switch (page) {
      case 'dashboard_operacional':
        return /*#__PURE__*/React.createElement(DashboardPage, {
          type: "operational",
          setPage: setPage,
          taxRegime: taxRegime
        });
      case 'dashboard_financial':
        return /*#__PURE__*/React.createElement(DashboardPage, {
          type: "financial",
          setPage: setPage,
          taxRegime: taxRegime
        });
      case 'orders':
        return /*#__PURE__*/React.createElement(OrdersPage, {
          taxRegime: taxRegime
        });
      case 'customers':
        return /*#__PURE__*/React.createElement(CustomersPage, {
          setPage: setPage
        });
      case 'contracts':
        return /*#__PURE__*/React.createElement(ContractsPage, {
          taxRegime: taxRegime
        });
      case 'financial':
        return /*#__PURE__*/React.createElement(FinancialPage, {
          taxRegime: taxRegime,
          finPerms: (user === null || user === void 0 ? void 0 : user.role) === 'ADMIN' ? null : permissions["".concat(user === null || user === void 0 ? void 0 : user.role, "_fin")] || null
        });
      case 'inventory':
        return /*#__PURE__*/React.createElement(InventoryPage, null);
      case 'technicians':
        return /*#__PURE__*/React.createElement(TechniciansPage, null);
      case 'fleet':
        return /*#__PURE__*/React.createElement(FleetPage, null);
      case 'settings':
        return /*#__PURE__*/React.createElement(SettingsPage, {
          taxRegime: taxRegime,
          setTaxRegime: setTaxRegime,
          incomeCats: incomeCats,
          setIncomeCats: setIncomeCats,
          expenseCats: expenseCats,
          setExpenseCats: setExpenseCats,
          bankAccounts: bankAccounts,
          setBankAccounts: setBankAccounts,
          payMethods: payMethods,
          setPayMethods: setPayMethods,
          permissions: permissions,
          savePermissions: savePermissions
        });
      default:
        return /*#__PURE__*/React.createElement("div", {
          className: "p-10 text-center text-gray-400"
        }, "M\xF3dulo n\xE3o encontrado");
    }
  };
  var regime = TAX_REGIMES[taxRegime];
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    page: page,
    setPage: setPage,
    collapsed: collapsed,
    setCollapsed: setCollapsed,
    user: user,
    permissions: permissions
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col overflow-hidden"
  }, /*#__PURE__*/React.createElement(Header, {
    page: page,
    onLogout: function onLogout() {
      api.logout();
      setLoggedIn(false);
    },
    setPage: setPage,
    regime: regime,
    user: user
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 overflow-y-auto bg-gray-50"
  }, renderPage())));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));