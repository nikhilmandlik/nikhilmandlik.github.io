// JavaScript Document
var container, stats;
var camera, scene, controls, renderer;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth - 50;
var windowHalfY = window.innerHeight- 50;
var objectpositiony = 0;
var objectpositiony = 0;
var directionalLight = 0;
var ambientLight = 0;

function init(cameraz,objy,modelname) {

	var oldmodel = document.getElementById('chartId');
	var parentDiv = oldmodel.parentNode;
	container = document.createElement( 'chartId' );
	container.setAttribute('id','chartId');
	parentDiv.replaceChild(container, oldmodel);

	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 20000 );
	camera.position.z = cameraz;
	camera.position.y = 0;
	objectpositiony = objy;
	var a = new THREE.Vector3( 0, 50, 0 );

	controls = new THREE.TrackballControls( camera );
	controls.rotateSpeed = 3.0;
	controls.zoomSpeed = 1.5;
	controls.panSpeed = 1;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.keys = [ 65, 83, 68 ];
	controls.addEventListener( 'change', render );

	// scene
	scene = new THREE.Scene();

	//0x101030
	directionalLight = 0x36373A;
	ambientLight = 0x999999;

	var ambient = new THREE.AmbientLight( 0x999999 );
	scene.add( ambient );

	var directionalLight1 = new THREE.DirectionalLight( directionalLight );
	directionalLight1.position.set( 50, 50, 50 ).normalize();
	scene.add( directionalLight1 );

	var directionalLight2 = new THREE.DirectionalLight( directionalLight );
	directionalLight2.position.set( -50, -50, -50 ).normalize();
	scene.add( directionalLight2 );

	var directionalLight3 = new THREE.DirectionalLight( directionalLight );
	directionalLight3.position.set( -50, 50, 50 ).normalize();
	scene.add( directionalLight3 );

	var directionalLight4 = new THREE.DirectionalLight( directionalLight );
	directionalLight4.position.set( 50, -50, -50 ).normalize();
	scene.add( directionalLight4 );

	if (modelname == 'Natalie'){
		var texturelocation1 = '3DModels/Natalie/Natalie.jpg';
		var texturelocation2 = '3DModels/Natalie/Hairs.jpg';

		var objlocation1 = '3DModels/Natalie/Natalie.OBJ';
		var objlocation2 = '3DModels/Natalie/Hairs.obj';

		// model 1
		var loader1 = new THREE.OBJLoader();
		loader1.addEventListener( 'load', function ( event ) {
			var object1 = event.content;
			for ( var i = 0, l = object1.children.length; i < l; i ++ ) {
				object1.children[ i ].material.map = texture1;
			}
			object1.position.y = objectpositiony;
			scene.add( object1 );
		});
		loader1.load(objlocation1);

		// texture 1
		var texture1 = new THREE.Texture();
		var loader1 = new THREE.ImageLoader();
		loader1.addEventListener( 'load', function ( event ) {
			texture1.image = event.content;
			texture1.needsUpdate = true;
		} );
		loader1.load(texturelocation1);

		// model 2
		var loader5 = new THREE.OBJLoader();
		loader5.addEventListener( 'load', function ( event ) {
			var object5 = event.content;
			for ( var i = 0, l = object5.children.length; i < l; i ++ ) {
				object5.children[ i ].material.map = texture2;
			}
			object5.position.y = objectpositiony;
			scene.add( object5 );
		});
		loader5.load(objlocation2);

		// texture 2
		var texture2 = new THREE.Texture();
		var loader5 = new THREE.ImageLoader();
		loader5.addEventListener( 'load', function ( event ) {
			texture2.image = event.content;
			texture2.needsUpdate = true;
		} );
		loader5.load(texturelocation2);
	}
	if (modelname == 'Hiranyakashipu'){
		var texturelocation1 = '3DModels/Hiranyakashipu/Armor.png';
		var texturelocation2 = '3DModels/Hiranyakashipu/SkinCloths.png';
		var objlocation1 = '3DModels/Hiranyakashipu/Armor.obj';
		var objlocation2 = '3DModels/Hiranyakashipu/SkinCloths.obj';

		// model 1
		var loader1 = new THREE.OBJLoader();
		loader1.addEventListener( 'load', function ( event ) {
			var object1 = event.content;
			for ( var i = 0, l = object1.children.length; i < l; i ++ ) {
				object1.children[ i ].material.map = texture1;
			}
			object1.position.y = objectpositiony;
			scene.add( object1 );
		});
		loader1.load(objlocation1);

		// texture 1
		var texture1 = new THREE.Texture();
		var loader1 = new THREE.ImageLoader();
		loader1.addEventListener( 'load', function ( event ) {
			texture1.image = event.content;
			texture1.needsUpdate = true;
		} );
		loader1.load(texturelocation1);

		// model 2
		var loader2 = new THREE.OBJLoader();
		loader2.addEventListener( 'load', function ( event ) {
			var object2 = event.content;
			for ( var i = 0, l = object2.children.length; i < l; i ++ ) {
				object2.children[ i ].material.map = texture2;
			}
			object2.position.y = objectpositiony;
			scene.add( object2 );
		});
		loader2.load(objlocation2);

		// texture 2
		var texture2 = new THREE.Texture();
		var loader2 = new THREE.ImageLoader();
		loader2.addEventListener( 'load', function ( event ) {
			texture2.image = event.content;
			texture2.needsUpdate = true;
		} );
		loader2.load(texturelocation2);
	}
	if (modelname == 'Mace'){
		var texturelocation1 = '3DModels/Hiranyakashipu/Mace.png';
		var objlocation1 = '3DModels/Hiranyakashipu/Mace.obj';

		// model 1
		var loader1 = new THREE.OBJLoader();
		loader1.addEventListener( 'load', function ( event ) {
			var object1 = event.content;
			for ( var i = 0, l = object1.children.length; i < l; i ++ ) {
				object1.children[ i ].material.map = texture1;
			}
			object1.position.y = objectpositiony;
			scene.add( object1 );
		});
		loader1.load(objlocation1);

		// texture 1
		var texture1 = new THREE.Texture();
		var loader1 = new THREE.ImageLoader();
		loader1.addEventListener( 'load', function ( event ) {
			texture1.image = event.content;
			texture1.needsUpdate = true;
		} );
		loader1.load(texturelocation1);
	}
	if (modelname == 'Man'){
		var texturelocation = '3DModels/Man/Man.jpg';
		var objlocation1 = '3DModels/Man/Man.obj';

		// model 1
		var loader1 = new THREE.OBJLoader();
		loader1.addEventListener( 'load', function ( event ) {
			var object1 = event.content;
			for ( var i = 0, l = object1.children.length; i < l; i ++ ) {
				object1.children[ i ].material.map = texture;
			}
			object1.position.y = objectpositiony;
			scene.add( object1 );
		});
		loader1.load(objlocation1);

		// texture 1
		var texture = new THREE.Texture();
		var loader = new THREE.ImageLoader();
		loader.addEventListener( 'load', function ( event ) {
			texture.image = event.content;
			texture.needsUpdate = true;
		} );
		loader.load(texturelocation);
	}
	if (modelname == 'Help'){
		var texturelocation1 = '3DModels/Help/Help.jpg';
		var objlocation1 = '3DModels/Help/Help.obj';

		// model 1
		var loader1 = new THREE.OBJLoader();
		loader1.addEventListener( 'load', function ( event ) {
			var object1 = event.content;
			for ( var i = 0, l = object1.children.length; i < l; i ++ ) {
				object1.children[ i ].material.map = texture1;
			}
			object1.position.y = objectpositiony;
			scene.add( object1 );
		});
		loader1.load(objlocation1);

		// texture 1
		var texture1 = new THREE.Texture();
		var loader1 = new THREE.ImageLoader();
		loader1.addEventListener( 'load', function ( event ) {
			texture1.image = event.content;
			texture1.needsUpdate = true;
		} );
		loader1.load(texturelocation1);
	}

	renderer = new THREE.WebGLRenderer({ clearAlpha: 1, clearColor: 0x000000, antialias: true });
	renderer.setSize( windowHalfX, windowHalfY );
	container.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );
	animate();
}

function onWindowResize() {
	camera.aspect = window.innerWidth/ window.innerHeight;
	camera.updateProjectionMatrix();
	camera.lookAt(a);
	renderer.setSize( windowHalfX, windowHalfY );
	controls.handleResize();
	render();
}

function animate() {
	requestAnimationFrame( animate );
	controls.update();
}

function render() {
	var timer = -0.0002 * Date.now();
	renderer.render( scene, camera );

    if (stats) {
        stats.update();
    }
}
