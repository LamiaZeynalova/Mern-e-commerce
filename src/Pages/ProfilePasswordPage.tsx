import React from 'react'
import Input from '../Components/Profile/Input.tsx'
import Button from '../Components/Profile/Button.tsx'

const ProfilePasswordPage = () => {
    return (
        <form>
            <Input classname="w-[80]" type="password" label="New Password" />
            <Input classname="w-[80]" type="password" label="Confirm Password" />
            <Button>
                Change password
            </Button>
        </form>
    )
}

export default ProfilePasswordPage