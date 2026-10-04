// NEXT_TRAIN_WIDGET: the Next Train widget design. Loaded by the script you paste into Scriptable,
// which passes in CFG (your station, directions and walk time).
const NAMES = {"101":"Van Cortlandt Park-242 St","103":"238 St","104":"231 St","106":"Marble Hill-225 St","107":"215 St","108":"207 St","109":"Dyckman St","110":"191 St","111":"181 St","112":"168 St-Washington Hts","113":"157 St","114":"145 St","115":"137 St-City College","116":"125 St","117":"116 St-Columbia University","118":"Cathedral Pkwy (110 St)","119":"103 St","120":"96 St","121":"86 St","122":"79 St","123":"72 St","124":"66 St-Lincoln Center","125":"59 St-Columbus Circle","126":"50 St","127":"Times Sq-42 St","128":"34 St-Penn Station","129":"28 St","130":"23 St","131":"18 St","132":"14 St","133":"Christopher St-Stonewall","134":"Houston St","135":"Canal St","136":"Franklin St","137":"Chambers St","138":"WTC Cortlandt","139":"Rector St","142":"South Ferry","201":"Wakefield-241 St","204":"Nereid Av","205":"233 St","206":"225 St","207":"219 St","208":"Gun Hill Rd","209":"Burke Av","210":"Allerton Av","211":"Pelham Pkwy","212":"Bronx Park East","213":"E 180 St","214":"West Farms Sq-E Tremont Av","215":"174 St","216":"Freeman St","217":"Simpson St","218":"Intervale Av","219":"Prospect Av","220":"Jackson Av","221":"3 Av-149 St","222":"149 St-Hostos","224":"135 St","225":"125 St","226":"116 St","227":"110 St-Malcolm X Plaza","228":"Park Place","229":"Fulton St","230":"Wall St","231":"Clark St","232":"Borough Hall","233":"Hoyt St","234":"Nevins St","235":"Atlantic Av-Barclays Ctr","236":"Bergen St","237":"Grand Army Plaza","238":"Eastern Pkwy-Brooklyn Museum","239":"Franklin Av-Medgar Evers College","241":"President St-Medgar Evers College","242":"Sterling St","243":"Winthrop St","244":"Church Av","245":"Beverly Rd","246":"Newkirk Av-Little Haiti","247":"Flatbush Av-Brooklyn College","248":"Nostrand Av","249":"Kingston Av","250":"Crown Hts-Utica Av","251":"Sutter Av-Rutland Rd","252":"Saratoga Av","253":"Rockaway Av","254":"Junius St","255":"Pennsylvania Av","256":"Van Siclen Av","257":"New Lots Av","301":"Harlem-148 St","302":"145 St","401":"Woodlawn","402":"Mosholu Pkwy","405":"Bedford Park Blvd-Lehman College","406":"Kingsbridge Rd","407":"Fordham Rd","408":"183 St","409":"Burnside Av","410":"176 St","411":"Mt Eden Av","412":"170 St","413":"167 St","414":"161 St-Yankee Stadium","415":"149 St-Hostos","416":"138 St-Grand Concourse","418":"Fulton St","419":"Wall St","420":"Bowling Green","423":"Borough Hall","501":"Eastchester-Dyre Av","502":"Baychester Av","503":"Gun Hill Rd","504":"Pelham Pkwy","505":"Morris Park","601":"Pelham Bay Park","602":"Buhre Av","603":"Middletown Rd","604":"Westchester Sq-E Tremont Av","606":"Zerega Av","607":"Castle Hill Av","608":"Parkchester","609":"St Lawrence Av","610":"Morrison Av-Soundview","611":"Elder Av","612":"Whitlock Av","613":"Hunts Point Av","614":"Longwood Av","615":"E 149 St","616":"E 143 St-St Mary's St","617":"Cypress Av","618":"Brook Av","619":"3 Av-138 St","621":"125 St","622":"116 St","623":"110 St","624":"103 St","625":"96 St","626":"86 St","627":"77 St","628":"68 St-Hunter College","629":"59 St","630":"51 St","631":"Grand Central-42 St","632":"33 St","633":"28 St","634":"23 St-Baruch College","635":"14 St-Union Sq","636":"Astor Pl","637":"Bleecker St","638":"Spring St","639":"Canal St","640":"Brooklyn Bridge-City Hall","701":"Flushing-Main St","702":"Mets-Willets Point","705":"111 St","706":"103 St-Corona Plaza","707":"Junction Blvd","708":"90 St-Elmhurst Av","709":"82 St-Jackson Hts","710":"74 St-Broadway","711":"69 St","712":"61 St-Woodside","713":"52 St","714":"46 St-Bliss St","715":"40 St-Lowery St","716":"33 St-Rawson St","718":"Queensboro Plaza","719":"Court Sq","720":"Hunters Point Av","721":"Vernon Blvd-Jackson Av","723":"Grand Central-42 St","724":"5 Av","725":"Times Sq-42 St","726":"34 St-Hudson Yards","901":"Grand Central-42 St","902":"Times Sq-42 St","R43":"77 St","S17":"Annadale","S01":"Franklin Av","M01":"Middle Village-Metropolitan Av","M11":"Myrtle Av","F16":"East Broadway","F33":"Avenue N","M05":"Forest Av","S30":"Tompkinsville","A36":"Chambers St","D09":"170 St","F39":"Neptune Av","N09":"Avenue U","F32":"Bay Pkwy","R13":"5 Av/59 St","B22":"25 Av","H14":"Beach 105 St","F05":"Briarwood","R19":"23 St","R18":"28 St","A03":"Dyckman St","M16":"Marcy Av","A16":"116 St","A41":"Jay St-MetroTech","R39":"45 St","A52":"Liberty Av","G34":"Classon Av","D30":"Cortelyou Rd","G20":"36 St","B18":"79 St","G29":"Metropolitan Av","G21":"Queens Plaza","R23":"Canal St","G09":"67 Av","A51":"Broadway Junction","R01":"Astoria-Ditmars Blvd","L15":"Jefferson St","S25":"Dongan Hills","H01":"Aqueduct Racetrack","J22":"Cleveland St","A20":"86 St","A57":"Grant Av","G15":"65 St","D34":"Avenue M","D29":"Beverley Rd","A15":"125 St","D18":"23 St","N08":"Kings Hwy","D14":"7 Av","D08":"174-175 Sts","M20":"Canal St","L10":"Lorimer St","A30":"23 St","A46":"Nostrand Av","N03":"Fort Hamilton Pkwy","R06":"36 Av","D03":"Bedford Park Blvd","M10":"Central Av","F22":"Smith-9 Sts","Q05":"96 St","S29":"Stapleton","M04":"Fresh Pond Rd","A10":"163 St-Amsterdam Av","R30":"DeKalb Av","B04":"21 St-Queensbridge","J14":"104 St","L24":"Atlantic Av","R29":"Jay St-MetroTech","L25":"Sutter Av","D24":"Atlantic Av-Barclays Ctr","F27":"Church Av","D42":"W 8 St-NY Aquarium","F34":"Avenue P","H08":"Beach 44 St","F15":"Delancey St-Essex St","J13":"111 St","F01":"Jamaica-179 St","R14":"57 St-7 Av","B21":"Bay Pkwy","H13":"Beach 98 St","R15":"49 St","D12":"155 St","S16":"Huguenot","Q04":"86 St","F12":"5 Av/53 St","G30":"Broadway","A24":"59 St-Columbus Circle","R25":"Cortlandt St","D38":"Neck Rd","A61":"Rockaway Blvd","R42":"Bay Ridge Av","D43":"Coney Island-Stillwell Av","G16":"Northern Blvd","L29":"Canarsie-Rockaway Pkwy","A31":"14 St","G22":"Court Sq","J31":"Kosciuszko St","D19":"14 St","M09":"Knickerbocker Av","H02":"Aqueduct-N Conduit Av","S21":"Oakwood Heights","B17":"71 St","J23":"Van Siclen Av","L11":"Graham Av","J17":"75 St-Elderts Ln","B10":"57 St","A19":"96 St","R36":"36 St","F04":"Sutphin Blvd","A55":"Euclid Av","R22":"Prince St","S26":"Old Town","A34":"Canal St","A02":"Inwood-207 St","D33":"Avenue J","M14":"Hewes St","L03":"14 St-Union Sq","L14":"Morgan Av","D15":"47-50 Sts-Rockefeller Ctr","A63":"104 St","M21":"Chambers St","L05":"3 Av","D04":"Kingsbridge Rd","R26":"Rector St","J19":"Cypress Hills","A40":"High St","G08":"Forest Hills-71 Av","L20":"Wilson Av","G33":"Bedford-Nostrand Avs","S11":"Arthur Kill","L26":"Livonia Av","L19":"Halsey St","F21":"Carroll St","F29":"Ditmas Av","F35":"Kings Hwy","S22":"New Dorp","H07":"Beach 60 St","R31":"Atlantic Av-Barclays Ctr","D25":"7 Av","D39":"Sheepshead Bay","B12":"9 Av","A32":"W 4 St-Wash Sq","G07":"Jamaica-Van Wyck","G24":"21 St","A11":"155 St","A25":"50 St","A47":"Kingston-Throop Avs","G12":"Grand Av-Newtown","N04":"New Utrecht Av","A12":"145 St","R05":"Broadway","A43":"Lafayette Av","D37":"Avenue U","A60":"88 St","R35":"25 St","G18":"46 St","G36":"Fulton St","H06":"Beach 67 St","F11":"Lexington Av/53 St","D26":"Prospect Park","R24":"City Hall","F07":"75 Av","N05":"18 Av","R16":"Times Sq-42 St","A06":"181 St","J30":"Gates Av","F20":"Bergen St","A48":"Utica Av","Q03":"72 St","A22":"72 St","A54":"Shepherd Av","R41":"59 St","A38":"Fulton St","D11":"161 St-Yankee Stadium","D32":"Avenue H","R08":"39 Av-Dutch Kills","D21":"Broadway-Lafayette St","S20":"Bay Terrace","J12":"121 St","F02":"169 St","F30":"18 Av","G31":"Flushing Av","B16":"62 St","H10":"Beach 25 St","M22":"Fulton St","R21":"8 St-NYU","L12":"Grand St","S15":"Prince's Bay","S04":"Botanic Garden","D05":"Fordham Rd","M08":"Myrtle-Wyckoff Avs","F24":"7 Av","A18":"103 St","H03":"Howard Beach-JFK Airport","J24":"Alabama Av","L21":"Bushwick Av-Aberdeen St","R32":"Union St","J16":"85 St-Forest Pkwy","B08":"Lexington Av/63 St","R27":"Whitehall St-South Ferry","L27":"New Lots Av","D16":"42 St-Bryant Pk","F36":"Avenue U","B20":"20 Av","B13":"Fort Hamilton Pkwy","F25":"15 St-Prospect Park","D20":"W 4 St-Wash Sq","G26":"Greenpoint Av","M18":"Delancey St-Essex St","L06":"1 Av","D40":"Brighton Beach","A27":"42 St-Port Authority Bus Terminal","R04":"30 Av","H11":"Far Rockaway-Mott Av","L02":"6 Av","S27":"Grasmere","J20":"Crescent St","A64":"111 St","A07":"175 St","G13":"Elmhurst Av","D13":"145 St","D27":"Parkside Av","R44":"86 St","H04":"Broad Channel","A44":"Clinton-Washington Avs","A49":"Ralph Av","B23":"Bay 50 St","G11":"Woodhaven Blvd","S09":"Tottenville","J27":"Broadway Junction","L17":"Myrtle-Wyckoff Avs","R09":"Queensboro Plaza","M13":"Lorimer St","S23":"Grant City","G06":"Sutphin Blvd-Archer Av-JFK Airport","A17":"Cathedral Pkwy (110 St)","F06":"Kew Gardens-Union Tpke","A42":"Hoyt-Schermerhorn Sts","R20":"14 St-Union Sq","N06":"20 Av","A05":"190 St","G35":"Clinton-Washington Avs","J29":"Halsey St","D22":"Grand St","N10":"86 St","S19":"Great Kills","M06":"Seneca Av","H15":"Rockaway Park-Beach 116 St","L13":"Montrose Av","D10":"167 St","S14":"Pleasant Plains","G32":"Myrtle-Willoughby Avs","F09":"Court Sq-23 St","A21":"81 St-Museum of Natural History","S31":"St George","Q01":"Canal St","A53":"Van Siclen Av","R34":"Prospect Av","E01":"World Trade Center","S03":"Park Pl","D31":"Newkirk Plaza","G19":"Steinway St","F03":"Parsons Blvd","R11":"Lexington Av/59 St","F18":"York St","F31":"Avenue I","B15":"55 St","H09":"Beach 36 St","M23":"Broad St","R17":"34 St-Herald Sq","D06":"182-183 Sts","A14":"135 St","N07":"Bay Pkwy","B14":"50 St","R45":"Bay Ridge-95 St","G28":"Nassau Av","A33":"Spring St","A09":"168 St","G05":"Jamaica Center-Parsons/Archer","R40":"53 St","A59":"80 St","A50":"Rockaway Av","G14":"Jackson Hts-Roosevelt Av","D35":"Kings Hwy","R03":"Astoria Blvd","D01":"Norwood-205 St","F23":"4 Av-9 St","F26":"Fort Hamilton Pkwy","F38":"Avenue X","L16":"DeKalb Av","L28":"East 105 St","S24":"Jefferson Av","A65":"Ozone Park-Lefferts Blvd","B19":"18 Av","M19":"Bowery","R33":"4 Av-9 St","D28":"Church Av","R28":"Court St","J28":"Chauncey St","D41":"Ocean Pkwy","J21":"Norwood Av","L22":"Broadway Junction","G10":"63 Dr-Rego Park","A28":"34 St-Penn Station","H12":"Beach 90 St","A45":"Franklin Av","N02":"8 Av","S13":"Richmond Valley","D17":"34 St-Herald Sq","L01":"8 Av","M12":"Flushing Av","S28":"Clifton","D07":"Tremont Av","L08":"Bedford Av","B06":"Roosevelt Island","J15":"Woodhaven Blvd","S18":"Eltingville","F14":"2 Av"};
const FEED = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2F";
const AMBER = new Color("#ffc24a"), CYAN = new Color("#5cc8ff"), GREEN = new Color("#5dff9a"), DIM = new Color("#8798ad"), WHITE = new Color("#e8f1fb");

function lineColor(r) {
  const c = { "1": "#D82233", "2": "#D82233", "3": "#D82233", "4": "#009952", "5": "#009952", "6": "#009952", "7": "#9A38A1",
    A: "#0062CF", C: "#0062CF", E: "#0062CF", B: "#EB6800", D: "#EB6800", F: "#EB6800", M: "#EB6800", G: "#799534",
    J: "#8E5C33", Z: "#8E5C33", L: "#7C858C", N: "#F6BC26", Q: "#F6BC26", R: "#F6BC26", W: "#F6BC26", SI: "#08179C",
    GS: "#7C858C", FS: "#7C858C", H: "#7C858C", S: "#7C858C" };
  return c[r] || c[r.replace(/X$/, "")] || "#7C858C";
}
function lineText(r) {
  if (r === "GS" || r === "FS" || r === "H" || r === "S") return "S";
  if (r === "SI" || r === "SS") return "SIR";
  return r.replace(/X$/, "");
}

// Tiny GTFS-realtime reader: only the fields we need.
function parseFeed(b, wanted, out) {
  let p = 0;
  function varint() { let r = 0, m = 1, c; do { c = b[p++] & 255; r += (c & 127) * m; m *= 128; } while (c & 128); return r; }
  function str(s, e) { let t = ""; for (let i = s; i < e; i++) t += String.fromCharCode(b[i] & 255); return t; }
  function skip(w) { if (w === 0) varint(); else if (w === 1) p += 8; else if (w === 2) { const l = varint(); p += l; } else if (w === 5) p += 4; else throw new Error("bad feed"); }
  function msg(end, fn, onInt) {
    while (p < end) {
      const k = varint(), f = Math.floor(k / 8), w = k & 7;
      if (w === 2) { const l = varint(), e = p + l; fn(f, e); p = e; }
      else if (w === 0 && onInt) onInt(f, varint());
      else skip(w);
    }
  }
  function evTime(end) { let t = 0; msg(end, () => {}, (f, v) => { if (f === 2) t = v; }); return t; }
  msg(b.length, (f, e) => {
    if (f !== 2) return;
    msg(e, (f, e) => {
      if (f !== 3) return;
      let route = "", stus = [];
      msg(e, (f, e) => {
        if (f === 1) msg(e, (f, e) => { if (f === 5) route = str(p, e); });
        else if (f === 2) {
          const s = { id: "", a: 0, d: 0 };
          msg(e, (f, e) => { if (f === 4) s.id = str(p, e); else if (f === 2) s.a = evTime(e); else if (f === 3) s.d = evTime(e); });
          stus.push(s);
        }
      });
      if (!stus.length) return;
      const last = stus[stus.length - 1].id;
      for (const s of stus) {
        if (!wanted[s.id] || s.id === last) continue;
        const t = s.a || s.d;
        if (t) out.push({ route, stop: s.id, t, dest: NAMES[last.slice(0, 3)] || last });
      }
    });
  });
}

async function getTrains() {
  const wanted = {}; CFG.stops.forEach(s => wanted[s] = 1);
  const all = []; let ok = 0;
  for (const f of CFG.feeds) {
    try {
      const r = new Request(FEED + f);
      r.timeoutInterval = 20;
      const d = await r.load();
      const got = [];
      parseFeed(d.getBytes(), wanted, got);
      all.push(...got); ok++;
    } catch (e) { }
  }
  if (!ok) throw new Error("offline");
  const now = Date.now() / 1000;
  all.sort((a, b) => a.t - b.t);
  const keep = [];
  for (const a of all) {
    if (a.t < now - 30 || a.t > now + 5400) continue;
    if (keep.some(k => k.route === a.route && k.stop === a.stop && Math.abs(k.t - a.t) < 20)) continue;
    keep.push(a);
  }
  return keep;
}

function clock(d, short) {
  let h = d.getHours(), m = d.getMinutes(), ap = h < 12 ? "AM" : "PM";
  h = h % 12 || 12;
  return h + ":" + (m < 10 ? "0" : "") + m + (short ? "" : " " + ap);
}

function bullet(parent, route, size) {
  const txt = lineText(route);
  const s = parent.addStack();
  s.size = new Size(txt.length > 1 ? size * 1.6 : size, size);
  s.cornerRadius = size / 2;
  s.backgroundColor = new Color(lineColor(route));
  s.centerAlignContent();
  s.addSpacer();
  const t = s.addText(txt);
  t.font = Font.boldSystemFont(size * (txt.length > 1 ? .45 : .62));
  t.textColor = /^[NQRW]/.test(route) ? Color.black() : Color.white();
  s.addSpacer();
  return s;
}

function line(w, text, size, color, bold) {
  const t = w.addText(text);
  t.font = bold ? Font.boldSystemFont(size) : Font.systemFont(size);
  t.textColor = color; t.lineLimit = 1; t.minimumScaleFactor = .6;
  return t;
}

// The big countdown: a live ticking timer to the leave time (or GO NOW when it's time).
function timer(parent, leave, size, center) {
  if (leave.getTime() - Date.now() < 45000) {
    const t = line(parent, CFG.walk ? "GO!" : "NOW", size, GREEN, true);
    if (center) t.centerAlignText();
    return;
  }
  const d = parent.addDate(leave);
  d.applyTimerStyle();
  d.font = Font.boldMonospacedSystemFont(size);
  d.textColor = AMBER; d.lineLimit = 1; d.minimumScaleFactor = .5;
  if (center) d.centerAlignText();
}

// Glowing outlined box like the app's LEAVE IN panel.
function heroBox(parent, n, walk, opts) {
  const leave = new Date((n.t - walk) * 1000);
  const go = leave.getTime() - Date.now() < 45000;
  const box = parent.addStack();
  box.layoutVertically();
  box.borderColor = go ? GREEN : AMBER; box.borderWidth = 1.5; box.cornerRadius = 14;
  box.backgroundColor = new Color(go ? "#5dff9a" : "#ffc24a", .09);
  box.setPadding(opts.pad, 10, opts.pad, 10);
  if (opts.width) box.size = new Size(opts.width, 0);
  const k = box.addStack(); k.addSpacer();
  line(k, CFG.walk ? (go ? "LEAVE NOW" : "LEAVE IN") : "NEXT TRAIN IN", 10, go ? GREEN : AMBER, true);
  k.addSpacer();
  const tr = box.addStack(); tr.addSpacer(); timer(tr, leave, opts.timer, true); tr.addSpacer();
  const r = box.addStack(); r.centerAlignContent(); r.spacing = 4; r.addSpacer();
  bullet(r, n.route, 16);
  line(r, opts.wide ? "at " + clock(new Date(n.t * 1000)) + " to " + n.dest : clock(new Date(n.t * 1000)), 13, WHITE, true);
  r.addSpacer();
  if (!opts.wide) { const dr = box.addStack(); dr.addSpacer(); line(dr, "to " + n.dest, 11, DIM, false); dr.addSpacer(); }
  return leave;
}

// One upcoming train: bullet, arrival time, and when to leave for it.
function trainRow(parent, a, walk, withDest) {
  const r = parent.addStack(); r.centerAlignContent(); r.spacing = 6;
  bullet(r, a.route, 16);
  if (withDest) { line(r, a.dest, 12, WHITE, false); r.addSpacer(); line(r, clock(new Date(a.t * 1000), true), 12, WHITE, true); }
  else { line(r, clock(new Date(a.t * 1000), true), 13, WHITE, true); r.addSpacer(); }
  line(r, (CFG.walk ? "leave " : "") + clock(new Date((a.t - walk) * 1000), true), 11, CFG.walk ? GREEN : DIM, false);
}

function message(w, title, sub) {
  w.addSpacer();
  line(w, title, 14, WHITE, true);
  line(w, sub, 12, DIM, false);
  w.addSpacer();
}

async function build() {
  const fam = config.widgetFamily || "medium";
  const w = new ListWidget();
  w.backgroundColor = new Color("#05080e");
  const g = new LinearGradient();
  g.colors = [new Color("#0d2240"), new Color("#05080e")];
  g.locations = [0, .7];
  w.backgroundGradient = g;
  w.setPadding(fam === "small" ? 11 : 12, 13, fam === "small" ? 10 : 11, 13);
  w.url = CFG.url;
  w.refreshAfterDate = new Date(Date.now() + 5 * 60000);

  // header: station + direction
  const top = w.addStack(); top.centerAlignContent();
  line(top, CFG.station, fam === "small" ? 11 : 13, CYAN, true);
  if (fam !== "small") { top.addSpacer(8); line(top, CFG.dir, 11, DIM, false); }
  w.addSpacer(fam === "small" ? 5 : 7);

  let trains;
  try { trains = await getTrains(); }
  catch (e) { message(w, "Can't reach the MTA right now.", "Tap to open Next Train."); return w; }
  const walk = CFG.walk * 60;
  const now = Date.now() / 1000;
  const ok = trains.filter(a => a.t - walk - now > -15);
  const updated = "Updated " + clock(new Date());
  if (!ok.length) { message(w, "No trains due", "in the next 90 minutes"); line(w, updated, 9, DIM, false); return w; }
  const n = ok[0];
  let leave;

  if (fam === "small") {
    // Fixed clock times rather than a ticking timer: iOS refreshes widgets when it likes,
    // and a timer that passes zero starts counting up. A "leave by" time is never wrong.
    leave = new Date((n.t - walk) * 1000);
    const soon = leave.getTime() - Date.now() < 60000;
    const k = w.addStack(); k.centerAlignContent();
    line(k, CFG.walk ? "LEAVE BY" : "NEXT TRAIN", 10, soon ? GREEN : AMBER, true);
    k.addSpacer();
    line(k, "↻ " + clock(new Date(), true), 9, DIM, false);
    const big = w.addStack(); big.bottomAlignContent(); big.spacing = 3;
    line(big, clock(CFG.walk ? leave : new Date(n.t * 1000), true), 34, soon ? GREEN : AMBER, true);
    const ap = big.addStack(); ap.layoutVertically(); ap.addSpacer();
    line(ap, clock(leave).slice(-2), 11, soon ? GREEN : AMBER, true);
    ap.addSpacer(5);
    w.addSpacer(3);
    const list = w.addStack(); list.layoutVertically(); list.spacing = 4;
    ok.slice(0, 3).forEach((a, i) => {
      const r = list.addStack(); r.centerAlignContent(); r.spacing = 5;
      bullet(r, a.route, 15);
      line(r, clock(new Date(a.t * 1000), true), 13, i ? WHITE : (soon ? GREEN : AMBER), true);
      r.addSpacer();
      if (i && CFG.walk) line(r, "leave " + clock(new Date((a.t - walk) * 1000), true), 10, GREEN, false);
      else if (!i) line(r, a.dest.replace(/-.*/, ""), 10, DIM, false);
    });
    w.addSpacer();
  } else if (fam === "medium") {
    const body = w.addStack(); body.spacing = 12;
    leave = heroBox(body, n, walk, { width: 150, timer: 38, pad: 7 });
    const col = body.addStack(); col.layoutVertically(); col.spacing = 7;
    line(col, ok.length > 1 ? "THEN" : "NO MORE TRAINS SOON", 10, DIM, true);
    for (const a of ok.slice(1, 4)) trainRow(col, a, walk, false);
    col.addSpacer();
    line(col, updated, 9, DIM, false);
  } else { // large and extra large
    leave = heroBox(w, n, walk, { timer: 54, pad: 10, wide: true });
    w.addSpacer(10);
    const col = w.addStack(); col.layoutVertically(); col.spacing = 9;
    if (ok.length > 1) line(col, "THEN", 10, DIM, true);
    for (const a of ok.slice(1, 7)) trainRow(col, a, walk, true);
    w.addSpacer();
    line(w, updated, 9, DIM, false);
  }
  w.refreshAfterDate = new Date(Math.min(leave.getTime() + 20000, Date.now() + 5 * 60000));
  return w;
}

const widget = await build();
if (config.runsInWidget) Script.setWidget(widget);
else await widget.presentMedium();
Script.complete();
