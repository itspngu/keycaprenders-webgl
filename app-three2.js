var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var KeyboardRender;
(function (KeyboardRender) {
    // Required JS
    var loadPkg = [
        'three/controls/OrbitControls.js',
        'three/loaders/GLTFLoader.js',
        'three/loaders/DRACOLoader.js',
        'three/pmrem/PMREMGenerator.js',
        'three/pmrem/PMREMCubeUVPacker.js',
        'three/modifiers/SubdivisionModifier.js',
        'three/js/shaders/CopyShader.js',
        'three/js/shaders/SMAAShader.js',
        'three/js/postprocessing/EffectComposer.js',
        'three/js/postprocessing/SMAAPass.js',
        'three/js/postprocessing/RenderPass.js',
        'three/js/postprocessing/ShaderPass.js',
    ];
    // DOM
    var appWrapper;
    var threeContainer;
    var optionWrapper;
    var pickerContainer;
    var clickGuard;
    // ThreeJS Variables
    var camera, scene, controls;
    var materials = {
        keyboardColor: undefined,
        modLegends: undefined,
        accentLegends: undefined,
        alphaLegends: undefined,
        modBackground: undefined,
        accentBackground: undefined,
        alphaBackground: undefined
    };
    // Other Variables
    var pickerActive = false;
    var setOpts = {
        alphaBackground: '',
        alphaLegends: '',
        keyboardColor: '',
        modBackground: '',
        modLegends: '',
        accentBackground: '',
        accentLegends: ''
    };
    var materialColors = {
        alphaBackground: undefined,
        alphaLegends: undefined,
        keyboardColor: undefined,
        modBackground: undefined,
        modLegends: undefined,
        accentBackground: undefined,
        accentLegends: undefined
    };
    var inputOptions = [
        { id: 'alphaBackground', type: 'colorInput', label: "Alpha Background", defaultInput: 'cc' },
        { id: 'alphaLegends', type: 'colorInput', label: "Alpha Legends", defaultInput: 'ws1' },
        { id: 'keyboardColor', type: 'colorInput', label: 'Keyboard Color', defaultInput: '#3b3b3b' },
        { id: 'modBackground', type: 'colorInput', label: 'Mod Background', defaultInput: 'n9' },
        { id: 'modLegends', type: 'colorInput', label: "Mod Legends", defaultInput: 'ws1' },
        { id: 'accentBackground', type: 'colorInput', label: "Accent Background", defaultInput: 'ro2' },
        { id: 'accentLegends', type: 'colorInput', label: "Accent Legends", defaultInput: 'ws1' }
    ];
    var gmkColors = {
        'cr': 'rgb(5,5,5)',
        'n9': 'rgb(49,51,55)',
        'cc': 'rgb(125,128,115)',
        '2b': 'rgb(150,153,155)',
        'bj': 'rgb(159,158,151)',
        'cb': 'rgb(171,170,156)',
        'u9': 'rgb(188,185,173)',
        'l9': 'rgb(254,253,248)',
        't9': 'rgb(245,245,243)',
        '3k': 'rgb(249,248,248)',
        '2m': 'rgb(249, 250, 251)',
        'gr1': 'rgb(245, 245, 249)',
        'cp': 'rgb(255, 254, 253)',
        'ws1': 'rgb(255, 255, 253)',
        'ws2': 'rgb(253, 254, 255)',
        'br1': 'rgb(80, 47, 31)',
        'n7': 'rgb(38, 125, 47)',
        'ae': 'rgb(126, 187, 15)',
        '3b': 'rgb(146, 173, 154)',
        '3a': 'rgb(191, 227, 186)',
        'v4': 'rgb(0, 79, 185)',
        'n5': 'rgb(39, 139, 245)',
        'tu1': 'rgb(9, 116, 147)',
        'tu2': 'rgb(37, 205, 197)',
        'dy': 'rgb(108, 60, 157)',
        'ro1': 'rgb(105, 31, 40)',
        'p3': 'rgb(185, 37, 0)',
        'v1': 'rgb(222, 54, 18)',
        'ro2': 'rgb(255, 40, 17)',
        '3c': 'rgb(230, 187, 197)',
        'mg1': 'rgb(219, 66, 147)',
        'v2': 'rgb(244, 117, 23)',
        'n6': 'rgb(252, 200, 25)',
        'cv': 'rgb(253, 225, 30)',
        'ge1': 'rgb(255, 255, 34)'
    };
    var boardMap = {
        keyboardColor: ["top_wkl_Body1_307", "bottom_Body1_1"],
        alphaBackground: [
            "r4_700_v1_Body1_361", "r3_colon_v2_Body1_315_0", "r3_quot_v2_Body1_318_0", "r2_U_v2_Body1_317_0", "r3_k_v2_Body1_337_0", "r3_F_v3_Body1_313_0", "r3_j_v2_Body1_314_0", "r3_d_v2_Body1_347_0", "r1_0_v4_Body1_340_0", "r1_4_v2_Body1_321_0", "r2_W_v2_Body1_324_0", "r4_dot_v2_Body1_357_0", "r4_Z_v2_Body1_355_0", "r4_comma_v2_Body1_351_0", "r2_clbrc_v2_Body1_334_0", "r4_sls_v2_Body1_344_0", "r4_m_v2_Body1_356_0", "r4_N_v2_Body1_352_0", "r1_5_v2_Body1_325_0", "r4_B_v2_Body1_350_0", "r2_T_v2_Body1_316_0", "r2_Q_v2_Body1_330_0", "r3_S_v2_Body1_349_0", "r1_3_v2_Body1_322_0", "r1_1_v2_Body1_319_0", "r3_l_v2_Body1_312_0", "r1_2_v2_Body1_323_0", "r1_6_v2_Body1_326_0", "r1_-_v4_Body1_341_0", "r2_opbrc_v2_Body1_309_0", "r4_X_v2_Body1_336_0", "r2_E_v2_Body1_333_0", "r1_8_v2_Body1_339_0", "BACKSLASH_Body1_364_0", "r2_O_v2_Body1_348_0", "r2_Y_v2_Body1_328_0", "r1_9_v2_Body1_338_0", "r3_g_v2_Body1_311_0", "r1_7_v2_Body1_320_0", "r4_V_v2_Body1_329_0", "r2_P_v2_Body1_343_0", "r3_h_v2_Body1_310_0", "r2_R_v2_Body1_332_0", "r4_C_v2_Body1_353_0", "r1_=_v2_Body1_342_0", "r3_a_v2_Body1_327_0", "r2_i_v2_Body1_346_0"
        ],
        alphaLegends: [
            "r3_colon_v2_Body1_315_1",
            "r3_quot_v2_Body1_318_1",
            "r2_U_v2_Body1_317_1",
            "r3_k_v2_Body1_337_1",
            "r3_F_v3_Body1_313_1",
            "r3_j_v2_Body1_314_1",
            "r3_d_v2_Body1_347_1",
            "r1_0_v4_Body1_340_1",
            "r1_4_v2_Body1_321_1",
            "r2_W_v2_Body1_324_1",
            "r4_dot_v2_Body1_357_1",
            "r4_Z_v2_Body1_355_1",
            "r4_comma_v2_Body1_351_1",
            "r2_clbrc_v2_Body1_334_1",
            "r4_sls_v2_Body1_344_1",
            "r4_m_v2_Body1_356_1",
            "r4_N_v2_Body1_352_1",
            "r1_5_v2_Body1_325_1",
            "r4_B_v2_Body1_350_1",
            "r2_T_v2_Body1_316_1",
            "r2_Q_v2_Body1_330_1",
            "r3_S_v2_Body1_349_1",
            "r1_3_v2_Body1_322_1",
            "r1_1_v2_Body1_319_1",
            "r3_l_v2_Body1_312_1",
            "r1_2_v2_Body1_323_1",
            "r1_6_v2_Body1_326_1",
            "r1_-_v4_Body1_341_1",
            "r2_opbrc_v2_Body1_309_1",
            "r4_X_v2_Body1_336_1",
            "r2_E_v2_Body1_333_1",
            "r1_8_v2_Body1_339_1",
            "BACKSLASH_Body1_364_1",
            "r2_O_v2_Body1_348_1",
            "r2_Y_v2_Body1_328_1",
            "r1_9_v2_Body1_338_1",
            "r3_g_v2_Body1_311_1",
            "r1_7_v2_Body1_320_1",
            "r4_V_v2_Body1_329_1",
            "r2_P_v2_Body1_343_1",
            "r3_h_v2_Body1_310_1",
            "r2_R_v2_Body1_332_1",
            "r4_C_v2_Body1_353_1",
            "r1_=_v2_Body1_342_1",
            "r3_a_v2_Body1_327_1",
            "r2_i_v2_Body1_346_1"
        ],
        modBackground: [
            "CTRL_LEFT_(1)_Body1_366_0", "r2_tab_v2_Body1_331_0", "r4_sft_175_v2_Body1_360_0", "r4_alt_v2_(2)_Body1_362_0", "r3_caps_v2_Body1_335_0", "BACKSPACE_FULL_(1)_Body1_363_0", "r4_Fn_v3_Body1_345_0", "r4_alt_v2_Body1_359_0", "CTRL_RIGHT_(1)_Body1_365_0", "r4_sft_225_v2_Body1_358_0"
        ],
        modLegends: [
            "CTRL_LEFT_(1)_Body1_366_1",
            "r2_tab_v2_Body1_331_1",
            "r4_sft_175_v2_Body1_360_1",
            "r4_alt_v2_(2)_Body1_362_1",
            "r3_caps_v2_Body1_335_1",
            "BACKSPACE_FULL_(1)_Body1_363_1",
            "r4_Fn_v3_Body1_345_1",
            "r4_alt_v2_Body1_359_1",
            "CTRL_RIGHT_(1)_Body1_365_1",
            "r4_sft_225_v2_Body1_358_1"
        ],
        accentBackground: ["r1_esc_v3_Body1_308_0", "r3_enter_v2_Body1_354_0"],
        accentLegends: ["r1_esc_v3_Body1_308_1", "r3_enter_v2_Body1_354_1"]
    };
    // EXTERNAL MAGIC
    function getColor(opt) {
        if (setOpts[opt])
            return setOpts[opt];
        return undefined;
    }
    KeyboardRender.getColor = getColor;
    function getAllColors() {
        return JSON.parse(JSON.stringify(setOpts));
    }
    KeyboardRender.getAllColors = getAllColors;
    function setColor(opt, cString) {
        if (setOpts[opt]) {
            var color = setControlColor(cString);
            if (color != undefined) {
                materialColors[opt] = new THREE.Color(color);
                setOpts[opt] = color;
                materials[opt].color.set(color);
                return true;
            }
            console.error("ERROR: Color \"" + cString + "\" could not be translated to RGB");
        }
        else
            console.error("ERROR: \"" + opt + "\" is not a property of setOpts.");
        return false;
    }
    KeyboardRender.setColor = setColor;
    function hideUI() {
        optionWrapper.style.display = "none";
    }
    KeyboardRender.hideUI = hideUI;
    // Actual Work
    function clickOptionPicker(id, evt) {
        var loc = evt.srcElement.getBoundingClientRect();
        pickerActive = true;
        clickGuard.classList.add('active');
        pickerContainer.classList.add('active');
        // Set Location
        pickerContainer.setAttribute('data-target', id);
        pickerContainer.style.left = loc.left;
        pickerContainer.style.right = '';
        if (pickerContainer.offsetWidth + loc.left > window.innerWidth) {
            pickerContainer.style.left = '';
            pickerContainer.style.right = '0';
        }
    }
    function blurOptionInput(tar) {
        //@ts-ignore
        var val = document.getElementById("input-" + tar).value;
        var initialValue = document.getElementById("input-" + tar).getAttribute('value');
        var color = setControlColor(val);
        if (color != undefined) {
            document.getElementById("input-" + tar).setAttribute('value', val);
            materialColors[tar] = new THREE.Color(color);
            setOpts[tar] = color;
            materials[tar].color.set(color);
            //if(tar == 'modLegends' || tar == 'alphaLegends' || tar == 'accentLegends') materials[tar].emissive.set(color);
            document.getElementById("picker-" + tar).style.backgroundColor = color;
        }
        else {
            //@ts-ignore
            document.getElementById("input-" + tar).value = initialValue;
        }
        //document.getElementById(`picker-${id}`).style.backgroundColor = gmkColors[key];
    }
    function clickPickerColor(key) {
        var tar = pickerContainer.getAttribute('data-target');
        materialColors[tar] = new THREE.Color(gmkColors[key]);
        setOpts[tar] = gmkColors[key];
        materials[tar].color.set(gmkColors[key]);
        //if(tar == 'modLegends' || tar == 'alphaLegends' || tar == 'accentLegends') materials[tar].emissive.set(gmkColors[key]);
        document.getElementById("input-" + tar).setAttribute('value', key);
        //@ts-ignore
        document.getElementById("input-" + tar).value = key;
        document.getElementById("picker-" + tar).style.backgroundColor = gmkColors[key];
        clickClickGuard();
    }
    function clickClickGuard() {
        pickerActive = false;
        clickGuard.classList.remove('active');
        pickerContainer.classList.remove('active');
    }
    // Init Stuff
    function init() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Z̤̮̠̙̙̭͠A̶̞͖̫̟Ĺ͓̺͎̜̗G̣̗͕̩̦O͎̬̱̺͎,͕̼͇̼ ҉͉͙̱̯̫h̳̬̩̤͚͓͉e͉̰͉̘͍ͅͅ ̡̼̮ͅC̯͍̲̤͞o̥̰͇̩̤M͇̘̦E͇̣͚̠̯s̛̰̭");
                        // Select DOM
                        appWrapper = document.getElementById('appWrapper');
                        threeContainer = document.getElementById('threeContainer');
                        optionWrapper = document.getElementById('optionWrapper');
                        pickerContainer = document.getElementById('pickerContainer');
                        clickGuard = document.getElementById('clickGuard');
                        // Events
                        clickGuard.addEventListener('click', clickClickGuard);
                        // Do stuff
                        return [4 /*yield*/, loadUp('three/three.js')];
                    case 1:
                        // Do stuff
                        _a.sent();
                        loadStuff().then(function () {
                            console.log("Done loading, let's go!");
                            setupOptions();
                            threeInit();
                            animate();
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    KeyboardRender.init = init;
    function loadStuff() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Loading...');
                        return [4 /*yield*/, Promise.all(loadPkg.map(function (loadTar) {
                                return loadUp(loadTar);
                            }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function loadUp(tar) {
        return new Promise(function (resolve, reject) {
            var el = document.createElement('script');
            el.setAttribute('src', tar);
            el.addEventListener('load', function () {
                resolve();
            });
            document.head.appendChild(el);
        });
    }
    function setupOptions() {
        inputOptions.forEach(function (opt) {
            if (opt.type == 'colorInput')
                colorInputOptionMaker(opt);
        });
        for (var key in gmkColors) {
            pickerOptionMaker(key);
        }
    }
    function pickerOptionMaker(key) {
        var pick = document.createElement('div');
        pick.classList.add('picker-item');
        pick.style.backgroundColor = gmkColors[key];
        var pickText = document.createElement('span');
        pickText.classList.add('picker-label');
        pickText.innerText = key;
        pick.addEventListener('click', function () {
            clickPickerColor(key);
        });
        pick.appendChild(pickText);
        pickerContainer.appendChild(pick);
    }
    function colorInputOptionMaker(opt) {
        var initCol = setControlColor(opt.defaultInput);
        setOpts[opt.id] = initCol;
        materialColors[opt.id] = new THREE.Color(initCol);
        var optionItem = document.createElement('div');
        optionItem.classList.add('option-item');
        var optionLabel = document.createElement('span');
        optionLabel.classList.add('option-label');
        optionLabel.innerText = opt.label;
        var optionInputBox = document.createElement('div');
        optionInputBox.classList.add('option-input-box');
        var optionPicker = document.createElement('div');
        optionPicker.classList.add('option-picker');
        optionPicker.style.backgroundColor = initCol;
        optionPicker.id = "picker-" + opt.id;
        optionPicker.addEventListener('click', function (evt) {
            clickOptionPicker(opt.id, evt);
        });
        var optionInput = document.createElement('input');
        optionInput.classList.add('option-input');
        optionInput.setAttribute('value', opt.defaultInput);
        optionInput.id = "input-" + opt.id;
        optionInput.addEventListener('blur', function () {
            blurOptionInput(opt.id);
        });
        optionItem.appendChild(optionLabel);
        optionItem.appendChild(optionInputBox);
        optionInputBox.appendChild(optionPicker);
        optionInputBox.appendChild(optionInput);
        optionWrapper.appendChild(optionItem);
    }
    function setControlColor(col) {
        col = col.toLowerCase();
        if (col == undefined || col == null || col == '')
            return '';
        if (col.substring(0, 1) == '#')
            return hexToRGB(col);
        if (gmkColors[col])
            return gmkColors[col];
    }
    function hexToRGB(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        var sPar = "rgb(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + ")";
        //console.log(sPar);
        return sPar;
    }
    // THREE JS STUFF
    function threeInit() {
        camera = new THREE.PerspectiveCamera(50, threeContainer.offsetWidth / threeContainer.offsetHeight, 0.1, 100);
        camera.position.set(-6.5, 6, 1);
        controls = new THREE.OrbitControls(camera, threeContainer);
        controls.screenSpacePanning = true;
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        //scene.add( new THREE.HemisphereLight(0xffffff) );
        scene.fog = new THREE.Fog(255, 255, 255);
        /*let pointLight1 = new THREE.PointLight( 0xffffff, 1.0 );
        pointLight1.position.set( -5, 5, 5);
        pointLight1.castShadow = true;
        scene.add( pointLight1 );

        let pointLight2 = new THREE.PointLight( 0xffffff, 0.5 );
        pointLight2.position.set( 0, 10, 0);
        pointLight2.castShadow = true;
        scene.add( pointLight2 );*/
        // envmap
        var path = "assets/cube_map_1/";
        var urls = [
            path + "px.png", path + "nx.png",
            path + "py.png", path + "ny.png",
            path + "pz.png", path + "nz.png"
        ];
        var textureCube = new THREE.CubeTextureLoader().load(urls);
        //scene.background = textureCube;
        // Plane
        /*let gridColor = new THREE.Color("rgb(256,129,0)");
        let gridColor2 = new THREE.Color("rgb(156,0,255)");
        let plane = new THREE.GridHelper(80,80,gridColor,gridColor);
        let plane2 = new THREE.GridHelper(80,80,gridColor2,gridColor2);
        plane.position.y = - 0.5;
        plane2.position.y = -0.5;
        plane2.position.z = -.01;
        plane2.position.x = -.01;
        scene.add(plane);
        scene.add(plane2);*/
        // Smoother
        // TODO: Later
        //let subdivisions = 1;
        //let modifier = new THREE.SubdivisionModifier(subdivisions);
        // Colors and Material
        //let textureLoader = new THREE.TextureLoader();
        //let metalTexture = textureLoader.load(getMetalTexture());
        materials.keyboardColor = new THREE.MeshStandardMaterial({
            color: materialColors.keyboardColor,
            side: THREE.DoubleSide,
            dithering: true,
            envMap: textureCube,
            envMapIntensity: 10,
            //bumpMap: metalTexture,
            //bumpScale: 1.0,
            roughness: 0.3,
            metalness: 1.0,
        });
        // Materials
        materials.modLegends = new THREE.MeshStandardMaterial({
            color: materialColors.modLegends,
            dithering: true,
            roughness: 0.7,
            envMap: textureCube,
            envMapIntensity: 15,
        });
        materials.accentLegends = new THREE.MeshStandardMaterial({
            color: materialColors.accentLegends,
            dithering: true,
            roughness: 0.7,
            envMap: textureCube,
            envMapIntensity: 15,
        });
        materials.alphaLegends = new THREE.MeshStandardMaterial({
            color: materialColors.alphaLegends,
            dithering: true,
            roughness: 0.7,
            envMap: textureCube,
            envMapIntensity: 15,
        });
        materials.modBackground = new THREE.MeshStandardMaterial({
            color: materialColors.modBackground,
            dithering: true,
            roughness: 0.7,
            envMap: textureCube,
            envMapIntensity: 15,
        });
        materials.accentBackground = new THREE.MeshStandardMaterial({
            color: materialColors.accentBackground,
            dithering: true,
            roughness: 0.7,
            envMap: textureCube,
            envMapIntensity: 15,
        });
        materials.alphaBackground = new THREE.MeshStandardMaterial({
            color: materialColors.alphaBackground,
            dithering: true,
            roughness: 0.7,
            envMap: textureCube,
            envMapIntensity: 15,
        });
        var loader = new THREE.GLTFLoader();
        loader.setDRACOLoader(new THREE.DRACOLoader());
        loader.load('assets/idb60_wkl.glb', function (gltf) {
            gltf.scene.children.forEach(function (child) {
                if (child.type == "Group") {
                    // Set Key Cap
                    setKeyCap(child.children[0]);
                    // Set Legend
                    setLegend(child.children[1]);
                }
                else if (child.type == "Mesh") {
                    if (child.name == "top_wkl_Body1_307" || child.name == "bottom_Body1_1") {
                        // Body Pieces
                        setBody(child);
                    }
                    else {
                        // Set Key Cap
                        setKeyCap(child);
                    }
                }
            });
            gltf.scene.castShadow = false;
            //console.log(gltf);
            gltf.scene.position.y = 0;
            gltf.scene.position.x = 2;
            scene.add(gltf.scene);
        });
        KeyboardRender.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
        //renderer.shadowMap.enabled = true;
        KeyboardRender.renderer.setPixelRatio(window.devicePixelRatio);
        KeyboardRender.renderer.setSize(threeContainer.offsetWidth, threeContainer.offsetHeight);
        var composer = new THREE.EffectComposer(KeyboardRender.renderer);
        composer.addPass(new THREE.RenderPass(scene, camera));
        var pass = new THREE.SMAAPass(window.innerWidth * KeyboardRender.renderer.getPixelRatio(), window.innerHeight * KeyboardRender.renderer.getPixelRatio());
        composer.addPass(pass);
        threeContainer.appendChild(KeyboardRender.renderer.domElement);
        window.addEventListener('resize', resize, false);
    }
    function setKeyCap(key) {
        if (boardMap.alphaBackground.indexOf(key.name) > -1)
            key.material = materials.alphaBackground;
        if (boardMap.modBackground.indexOf(key.name) > -1)
            key.material = materials.modBackground;
        if (boardMap.accentBackground.indexOf(key.name) > -1)
            key.material = materials.accentBackground;
        key.castShadow = true;
        key.receiveShadow = true;
    }
    function setLegend(legend) {
        if (boardMap.alphaLegends.indexOf(legend.name) > -1)
            legend.material = materials.alphaLegends;
        if (boardMap.modLegends.indexOf(legend.name) > -1)
            legend.material = materials.modLegends;
        if (boardMap.accentLegends.indexOf(legend.name) > -1)
            legend.material = materials.accentLegends;
    }
    function setBody(body) {
        //body.material = bodyMaterial;
        if (boardMap.keyboardColor.indexOf(body.name) > -1)
            body.material = materials.keyboardColor;
        body.receiveShadow = true;
    }
    function resize() {
        camera.aspect = threeContainer.offsetWidth / threeContainer.offsetHeight;
        camera.updateProjectionMatrix();
        KeyboardRender.renderer.setSize(threeContainer.offsetWidth, threeContainer.offsetHeight);
        //console.log(camera);
    }
    function animate() {
        controls.update();
        KeyboardRender.renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    function getMetalTexture() {
        return "data:image/jpeg;base64,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";
    }
})(KeyboardRender || (KeyboardRender = {}));
window.addEventListener('load', KeyboardRender.init);
//# sourceMappingURL=app-three2.js.map