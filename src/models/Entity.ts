export enum EntityTypes {
    Model = 'model',
    None = 'none',
    Service = 'service'
};


/**
 * @description Class representing a generic entity.
 */
export default class Entity {
    /**
     * VARIABLES
     */
    public static template: string = `<div id="pdne-{ id }" class="entity entity-{ type }">
        { name }
    </div>`;

    /**
     * VARIABLES
     */
    public action: Function = () => {};
    public description: string = '';
    public group: string = '';
    public id: string = '';
    public implements: string[] = [];
    public implementsInstances: Entity[] = [];
    public name: string = '';
    public parent: string = '';
    public parentInstance: Entity = null;
    public type: EntityTypes = EntityTypes.None;


    /**
     * CONSTRUCTOR AND HOOKS
     */

    /**
     * @description Creates a new instance of this class.
     * @param {any} data (Optional) Object containing all needed data to use for the instance's creation.
     * @return {Entity} A new instance of this class.
     */
    constructor( data?: any ) {
        for ( let key in this ) {
            if ( this.hasOwnProperty( key ) ) {
                console.log( this[key] );
            }
        }
    }


    /*
     * STATIC METHODS
     */


    /*
     * PUBLIC METHODS
     */
}
