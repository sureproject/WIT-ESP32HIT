let display = require("./menu/config.group.display");
let neopixel = require("./menu/config.group.neopixel");
let buzzer = require("./menu/config.group.buzzer");
// let common = require("./menu/config.group.common");
let gpio = require("./menu/config.group.gpio");
let iot = require("./menu/config.group.iot");
let sdcard = require("./menu/config.group.sdcard");

module.exports = {
  //language=HTML format=false
  blocks: [
    display,
	gpio,
	{
            name : 'Sensor',
            color : '230',
            icon : '/static/icons/icons8_thermometer_96px.png',
            blocks : [
				'sw1_press',
                'button_1_status',
				'button_2_status',
                'Knob_status',
                
				{ 
                    xml : 
                    `<block type="analog_sensor">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        
                    </block>`
                },
				
				{ 
                    xml : 
                    `<block type="digital_sensor">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        
                    </block>`
                },
				
				'TCS_read_rgb',
                
				
				
            ]
        },
		{
            name : 'Motor',
            color : '230',
            icon: "/static/icons/SVG/c10.svg",
            blocks : [

                
                { 
                    xml : 
                    `<block type="WIT_servo">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
                },
				
				
                'WIT_motor_stop',
                {
                    xml : 
                    `<block type="WIT_motor_stop_ch">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="WIT_motor_forward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="WIT_motor_backward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="WIT_motor_spin_left">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="WIT_motor_spin_right">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="WIT_motor_turn_left">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="WIT_motor_turn_right">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="WIT_motor">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="WIT_motor_forward2">
                        <value name="speed1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed2">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="WIT_motor_backward2">
                        <value name="speed1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed2">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                /*{
                    xml : 
                    `<block type="Run_following_of_line">
                        <value name="_speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="_kp">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="_ki">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="_kd">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
                },
                */
                

                ]
        },
		//iot,
		//neopixel,
		buzzer,
		//sdcard,
		{
		  override : true,
		  name: "Time",
		  index: 50,
		  color: "230",
		  icon: "/static/icons/icons8_Story_Time_96px.png",
		  blocks: [
			  {
				  xml:
					  `<block type="time_delay">
							<value name="delay">
								<shadow type="math_number">
									<field name="NUM">1000</field>
								</shadow>
							</value>
						</block>`
			  },
			  {
				  xml:
					  `<block type="time_delay_microsec">
							<value name="delay">
								<shadow type="math_number">
									<field name="NUM">1000</field>
								</shadow>
							</value>
						</block>`
			  },
			  "time_millis",
			  "time_micros"
		  ]
	  },
  ],
};
