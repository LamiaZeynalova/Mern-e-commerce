import React from 'react'
import Input from '../Components/Profile/Input.tsx'
import Button from '../Components/Profile/Button.tsx'

const ProfileAddressPage = () => {
    return (
        <section>
            <form>
                <Input classname="w-[534px]" type="text" label="Street Address" />
                <div className="flex gap-4">
                    <Input classname="w-[259px]" type="text" label="City" />
                    <Input classname="w-[259px]" type="text" label="State" />
                </div>
                <div className="flex gap-4">
                    <Input classname="w-[259px]" type="text" label="Zip Code" />
                    <Input classname="w-[259px]" type="text" label="Country" />
                </div>
                <Button>
                    Save Changes
                </Button>
            </form>
        </section>
    )
}

export default ProfileAddressPage